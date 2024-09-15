import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to get the id from URL
import BlogBanner from "../Components/BlogBanner";
import BlogBloger from "../Components/BlogBloger";
import BlogLeaveReply from "../Components/BlogLeaveReply";
import BlogRecentPosts from "../Components/BlogRecentPosts";
import BlogPopularTags from "../Components/BlogPopularTags";

const AboutBlog = () => {
  const { search } = useLocation(); // Get the query parameters from the URL
  const queryParams = new URLSearchParams(search);
  const blogId = queryParams.get("id"); // Extract the 'id' parameter from the URL
  console.log(blogId);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const marketing = document.querySelector("#marketing");
    const about = document.querySelector("#about");
    const moreServices = document.querySelector("#moreServices");
    const messenger = document.querySelector("#messenger");

    if (marketing) observer.observe(marketing);
    if (about) observer.observe(about);
    if (moreServices) observer.observe(moreServices);
    if (messenger) observer.observe(messenger);

    return () => {
      if (marketing) observer.unobserve(marketing);
      if (about) observer.unobserve(about);
      if (moreServices) observer.unobserve(moreServices);
      if (messenger) observer.unobserve(messenger);
    };
  }, []);

  return (
    <div className="flex flex-col bg-black">
      {/* Pass the blogId to BlogBanner */}
      <BlogBanner blogId={blogId} />

      <div className="flex mt-4">
        <div className="flex flex-col w-2/3 mr-4">
          <div className="pl-4">
            <div
              id="marketing"
              className="opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
            >
              {/* Pass the blogId to BlogBloger */}
              <BlogBloger
                blogId={blogId}
                buttonText='SAAS'
              />
            </div>
            <div
              id="about"
              className="opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
            >
              {/* Pass the blogId to BlogLeaveReply */}
              <BlogLeaveReply blogId={blogId} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3">
          <div className="pr-4">
            <div
              id="moreServices"
              className="pb-4 opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
            >
              {/* Pass the blogId to BlogRecentPosts */}
              <BlogRecentPosts blogId={blogId} />
            </div>
            <div
              id="messenger"
              className="opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
            >
              {/* Pass the blogId to BlogPopularTags */}
              <BlogPopularTags blogId={blogId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlog;
