import React, { useState, useCallback, useRef, useEffect } from "react";
import * as faceapi from "face-api.js";
import { useDropzone } from "react-dropzone";
import {
  IoCloudUploadOutline,
  IoCameraOutline,
  IoDocumentAttachOutline,
} from "react-icons/io5";
import Details from "./Details";
import Loader from "./Loader";

const Upload = () => {
  const [selected, setSelected] = useState("");
  const [view, setView] = useState("initial");
  const [files, setFiles] = useState([]);

  const imgRef = useRef();
  const canvasRef = useRef();

  const handleImage = async () => {
    const detections = await faceapi
      .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(imgRef.current);
    faceapi.matchDimensions(canvasRef.current, {
      width: imgRef.current.width,
      height: imgRef.current.height,
    });

    const resized = faceapi.resizeResults(detections, {
      width: imgRef.current.width,
      height: imgRef.current.height,
    });
    faceapi.draw.drawDetections(canvasRef.current, resized);
    faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
    faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
  };

  useEffect(() => {
    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ]);
      handleImage();
    };

    if (imgRef.current) {
      loadModels();
    }
  }, [files]);

  const handleCompareClick = () => {
    setView("loading");
    setTimeout(() => {
      setView("details");
    }, 6000);
  };

  const handleSelection = (option) => {
    setSelected(option);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center justify-center p-7 mt-4">
      <div className="flex flex-col items-center w-full md:w-4/6 h-80 md:h-5/6 border-4 border-dashed border-purple-500 rounded-lg md:rounded-2xl bg-[#031c42] cursor-pointer">
        <div className="w-full md:rounded-xl bg-[#01132B] py-3 md:py-2 flex justify-evenly items-center text-center md:justify-start">
          <div
            className={`flex flex-col items-center cursor-pointer md:mx-14 ${
              selected === "upload" ? "text-[#2EB1EE] underline" : "text-white"
            }`}
            onClick={() => handleSelection("upload")}
          >
            <IoDocumentAttachOutline
              className={`${
                selected === "upload" ? "text-[#2EB1EE]" : "text-white"
              } text-3xl`}
            />
            <span
              className={`${
                selected === "upload"
                  ? "text-[#2EB1EE] underline"
                  : "text-white"
              } text-sm mt-1`}
            >
              Upload file
            </span>
          </div>
          <div
            className={`flex flex-col items-center cursor-pointer md:mx-14 ${
              selected === "camera" ? "text-[#2EB1EE] underline" : "text-white"
            }`}
            onClick={() => handleSelection("camera")}
          >
            <IoCameraOutline
              className={`${
                selected === "camera" ? "text-[#2EB1EE]" : "text-white"
              } text-3xl`}
            />
            <span
              className={`${
                selected === "camera"
                  ? "text-[#2EB1EE] underline"
                  : "text-white"
              } text-sm mt-1`}
            >
              Camera
            </span>
          </div>
        </div>
        <div
          {...getRootProps()}
          className={`p-2 md:p-10 md:rounded-2xl md:m-10 md:w-5/6 flex flex-col items-center justify-center ${
            files.length === 0 ? "md:bg-[#3C5372]" : ""
          }`}
        >
          <input {...getInputProps()} />
          {files.length === 0 ? (
            <>
              <IoCloudUploadOutline className="text-white text-5xl mt-2 md:mt-5" />
              <p className="mt-2 text-white text-lg">
                Drag and drop your image
              </p>
              <p className="text-white text-lg">or</p>
              <button className="mt-2 px-6 py-3 bg-[#2eb1ee] text-white rounded-full hover:bg-blue-400 transition-colors text-xl">
                Browse files
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-wrap mt-4 md:mt-0">
                {files.map((file) => (
                  <div
                    key={file.name}
                    className="w-24 h-24 m-2 flex items-center justify-center bg-white rounded-lg md:w-96 md:h-64 "
                  >
                    <img
                      crossOrigin="anonymous"
                      ref={imgRef}
                      src={file.preview}
                      alt="preview"
                      className="w-full h-full  rounded-lg"
                    />
                    <canvas
                      ref={canvasRef}
                      className="w-24 h-24  absolute  md:w-96 md:h-64 "
                    />
                  </div>
                ))}
              </div>
              <button className="mt-2 px-6 py-3 bg-[#2eb1ee] text-white rounded-full hover:bg-blue-400 transition-colors text-xl">
                Browse files
              </button>
            </>
          )}
        </div>
      </div>

      <button
        className="mt-8 md:mt-8 px-8 py-4 bg-[#F57025] text-white rounded-full hover:bg-[#FFCB60] transition-colors text-xl"
        onClick={handleCompareClick}
      >
        Compare
      </button>
      {view === "loading" && <Loader />}
      {view === "details" && <Details />}
    </div>
  );
};

export default Upload;
