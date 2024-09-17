import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  clearAllAboutErrors,
  updateAbout,
  resetAboutSlice,
  deleteAbout,
  getAllAbouts,
} from "@/store/slices/aboutSlice";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

const ManageAbouts = () => {
  const navigateTo = useNavigate();
  const handleReturnToDashboard = () => {
    navigateTo("/");
  };

  const { loading, abouts, error, message } = useSelector(
    (state) => state.about
  );
  const dispatch = useDispatch();

  const [aboutData, setAboutData] = useState({});
  const [isChanged, setIsChanged] = useState({});
  const [previewSvg, setPreviewSvg] = useState({});

  const handleInputChange = (id, field, value) => {
    setAboutData((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));

    setIsChanged((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleFileChange = (id, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewSvg((prev) => ({
        ...prev,
        [id]: reader.result,
      }));
      setAboutData((prev) => ({
        ...prev,
        [id]: { ...prev[id], svg: file },
      }));
      setIsChanged((prev) => ({
        ...prev,
        [id]: true,
      }));
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleUpdateAbout = async (id) => {
    if (isChanged[id]) {
      const data = aboutData[id];
  
      // Create form data for file and other input data
      const formData = new FormData();
      formData.append("title", data.title || "");
      formData.append("content", data.content || "");
      if (data.svg) {
        formData.append("svg", data.svg);
      }
      formData.append("imageAlt", data.imageAlt || "");
      formData.append("isCentered", data.isCentered || false);
  
      // Dispatch update with FormData
      dispatch(updateAbout({ id, formData })); // Pass formData correctly
    }
  };

  
  
  const handleDeleteAbout = (id) => {
    dispatch(deleteAbout(id));
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
  }, [dispatch, error, message]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Tabs defaultValue="week">
        <TabsContent value="week">
          <Card>
            <CardHeader className="flex gap-4 sm:justify-between sm:flex-row sm:items-center">
              <CardTitle>Manage Your Abouts</CardTitle>
              <Button className="w-fit" onClick={handleReturnToDashboard}>
                Return to Dashboard
              </Button>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              {abouts.map((element) => {
                return (
                  <Card key={element._id}>
                    <CardHeader className="text-3xl font-bold flex items-center justify-between flex-row">
                      {element.title}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Trash2
                              onClick={() => handleDeleteAbout(element._id)}
                              className="h-5 w-5 hover:text-red-500"
                            />
                          </TooltipTrigger>
                          <TooltipContent side="right" style={{ color: "red" }}>
                            Delete
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </CardHeader>

                    <div className="p-4 space-y-4">
                      <Label>Title:</Label>
                      <Input
                        type="text"
                        defaultValue={element.title}
                        onChange={(e) =>
                          handleInputChange(element._id, "title", e.target.value)
                        }
                      />

                      <Label>Content:</Label>
                      <Input
                        type="text"
                        defaultValue={element.content}
                        onChange={(e) =>
                          handleInputChange(element._id, "content", e.target.value)
                        }
                      />

                      <Label>SVG:</Label>
                      <Input
                        type="file"
                        accept=".svg"
                        onChange={(e) =>
                          handleFileChange(element._id, e.target.files[0])
                        }
                      />
                      {previewSvg[element._id] && (
                        <img
                          src={previewSvg[element._id]}
                          alt={element.imageAlt || "SVG preview"}
                          className="mt-2 h-12 w-12"
                        />
                      )}

                      <Label>Image Alt:</Label>
                      <Input
                        type="text"
                        defaultValue={element.imageAlt}
                        onChange={(e) =>
                          handleInputChange(element._id, "imageAlt", e.target.value)
                        }
                      />

                      <Label>Is Centered:</Label>
                      <Input
                        type="checkbox"
                        defaultChecked={element.isCentered}
                        onChange={(e) =>
                          handleInputChange(element._id, "isCentered", e.target.checked)
                        }
                      />

                      <Button
                        className="w-full mt-4"
                        onClick={() => handleUpdateAbout(element._id)}
                        disabled={!isChanged[element._id]} // Disable if no changes made
                      >
                        {isChanged[element._id] ? "Update About" : "No Changes"}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManageAbouts;
