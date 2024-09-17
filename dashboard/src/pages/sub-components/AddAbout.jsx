import {
    addNewAbout,
    clearAllAboutErrors,
    getAllAbouts,
    resetAboutSlice,
  } from "@/store/slices/aboutSlice";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { toast } from "react-toastify";
  import { Button } from "@/components/ui/button";
  import SpecialLoadingButton from "./SpecialLoadingButton";
 
const AddAbout = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [svg, setSvg] = useState("");
    const [svgPreview, setSvgPreview] = useState("");
    const [imageAlt, setImageAlt] = useState("");
    const [isCentered, setIsCentered] = useState(false);
  
    const handleSvg = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSvgPreview(reader.result);
        setSvg(file);
      };
    };
  
    const { loading, message, error } = useSelector((state) => state.about);
    const dispatch = useDispatch();
    const handleAddNewAbout = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("svg", svg);
      formData.append("imageAlt", imageAlt);
      formData.append("isCentered", isCentered);
  
      dispatch(addNewAbout(formData));
    };
  
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearAllAboutErrors());
      }
      if (message) {
        toast.success(message);
        dispatch(resetAboutSlice());
        dispatch(getAllAbouts());
      }
    }, [dispatch, loading, error]);
  
    return (
      <>
        <div className="flex justify-center items-center min-h-[100vh] sm:gap-4 sm:py-4 sm:pl-14 bg-purple-50">
          <form className="w-[100%] px-5 md:w-[650px]" onSubmit={handleAddNewAbout}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="font-semibold leading-7 text-gray-900 text-3xl text-center">
                  Add About
                </h2>
                <div className="mt-10 flex flex-col gap-5">
                  <div className="w-full sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Title
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                        <input
                          type="text"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
  
                  <div className="w-full sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Content
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                        <input
                          type="text"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Content"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
  
                  <div className="w-full col-span-full">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      About Img.
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        {svgPreview ? (
                          <img
                            className="mx-auto h-12 w-12 text-gray-300"
                            viewBox="0 0 24 24"
                            src={svgPreview ? `${svgPreview}` : "/docHolder.jpg"}
                          />
                        ) : (
                          <svg
                            className="mx-auto h-12 w-12 text-gray-300"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
  
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={handleSvg}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
  
                  <div className="w-full sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Image Alt 
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Alt text for image"
                        value={imageAlt}
                        onChange={(e) => setImageAlt(e.target.value)}
                      />
                    </div>
                  </div>
  
                  <div className="w-full sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Center Img
                    </label>
                    <div className="mt-2">
                      <input
                        type="checkbox"
                        checked={isCentered}
                        onChange={(e) => setIsCentered(e.target.checked)}
                      />
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="mt-6 flex items-center justify-end gap-x-6">
                {!loading ? (
                  <Button type="submit" className="w-full">
                    Add About
                  </Button>
                ) : (
                  <SpecialLoadingButton content={"Adding New About"} />
                )}
              </div>
              </div>
            </form>
        </div>
      </>
    );
  };
  
  export default AddAbout;
  