import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"; // Import axios for API calls

const Dashboard = () => {
  const [abouts, setAbouts] = useState([]);
  const [awardRecognitions, setAwardRecognitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigateTo = useNavigate();

  const gotoManageAbouts = () => {
    navigateTo("/manage/abouts");
  };

  const gotoManageAwardRecognitions = () => {
    navigateTo("/manage/awardRecognitions");
  };

  useEffect(() => {
    // Fetch both Abouts and Award Recognitions data from APIs
    const fetchData = async () => {
      try {
        const [aboutsResponse, awardRecognitionsResponse] = await Promise.all([
          axios.get("http://localhost:4000/api/v1/about/getall"),
          axios.get("http://localhost:4000/api/v1/awardRecognition/getall"),
        ]);

        setAbouts(aboutsResponse.data.abouts); // Assuming 'abouts' is the field in the response
        setAwardRecognitions(awardRecognitionsResponse.data.awardRecognitions); // Assuming 'awardRecognitions' is the field
        setLoading(false);
      } catch (error) {
        setError(error.message || "Something went wrong.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 bg-white">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">

              {/* About Section */}
              <Card className="flex flex-col justify-center">
                <CardHeader className="pb-2">
                  <CardTitle>Abouts</CardTitle>
                  <CardTitle className="text-6xl">{abouts.length}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button onClick={gotoManageAbouts}>Manage About</Button>
                </CardFooter>
              </Card>

              {/* Award and Recognition Section */}
              <Card className="flex flex-col justify-center">
                <CardHeader className="pb-2">
                  <CardTitle>Award & Recognitions</CardTitle>
                  <CardTitle className="text-6xl">{awardRecognitions.length}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button onClick={gotoManageAwardRecognitions}>Manage AwardRecognition</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Abouts Tab */}
            <Tabs>
              <TabsContent>
                <Card>
                  <CardHeader className="px-7 gap-3">
                    <CardTitle>Abouts</CardTitle>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-4">
                    {!loading && abouts && abouts.length > 0 ? (
                      abouts.map((element) => (
                        <Card key={element._id}>
                          <CardHeader>
                            <h3>{element.title}</h3>
                            <img
                              src={element.svg?.url}
                              alt={element.imageAlt}
                              className="w-32 h-32"
                            />
                          </CardHeader>
                          <CardContent>
                            <p>{element.content}</p>
                          </CardContent>
                        </Card>
                      ))
                    ) : loading ? (
                      <p>Loading...</p>
                    ) : (
                      <p className="text-3xl">You have not added any about.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Awards and Recognitions Tab */}
            <Tabs>
              <TabsContent>
                <Card>
                  <CardHeader className="px-7 gap-3">
                    <CardTitle>Award & Recognitions</CardTitle>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-4">
                    {!loading && awardRecognitions && awardRecognitions.length > 0 ? (
                      awardRecognitions.map((element) => (
                        <Card key={element._id}>
                          <CardHeader>
                            <h3>{element.title}</h3>
                            <img
                              src={element.svg?.url}
                              alt={element.title}
                              className="w-32 h-32"
                            />
                          </CardHeader>
                          <CardContent>
                            <p>{element.content}</p>
                          </CardContent>
                          <CardFooter>
                            <p>Tag: {element.tags}</p>
                            <p>Upload Date: {new Date(element.uploadDate).toDateString()}</p>
                          </CardFooter>
                        </Card>
                      ))
                    ) : loading ? (
                      <p>Loading...</p>
                    ) : (
                      <p className="text-3xl">You have not added any award recognition.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
