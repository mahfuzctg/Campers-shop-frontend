import { useAddProductMutation } from "@/redux/api/baseApi";
import Button from "@/root/ui/button";
import { Input } from "@/root/ui/input";
import { Label } from "@/root/ui/label";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Define an interface for the form data
interface ProductFormData {
  name: string;
  price: number;
  description: string;
  image: FileList | string; // Can be a FileList or a URL string
  quantity: number;
  category: string;
  rating: number;
}

const CreateProduct = () => {
  const navigate = useNavigate();
  const [addProduct, { isLoading }] = useAddProductMutation();
  const [isFileUpload, setIsFileUpload] = useState(true);

  // Use the defined type for useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();

  // Define the onSubmit function
  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    if (
      isFileUpload &&
      (!data.image || (data.image as FileList).length === 0)
    ) {
      toast.error("Image file is required");
      return;
    } else if (!isFileUpload && !data.image) {
      toast.error("Image URL is required");
      return;
    }

    try {
      let imageUrl = "";

      if (isFileUpload) {
        // Handle file upload here and get the image URL
        // Assuming the file upload function returns the URL
        // const imageResponse = await imageKit.upload({ file: (data.image as FileList)[0], fileName: (data.image as FileList)[0].name });
        // imageUrl = imageResponse.url;

        // Temporarily using a placeholder for image URL
        imageUrl = "file-uploaded-url"; // Replace with actual image URL
      } else {
        imageUrl = data.image as string;
      }

      const productData = {
        name: data.name,
        price: data.price,
        description: data.description,
        image: imageUrl,
        quantity: data.quantity,
        category: data.category,
        rating: data.rating,
      };

      const res = await addProduct(productData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        navigate("/product-management");
      } else {
        throw new Error(res?.message || "Failed to create product");
      }
    } catch (err) {
      // Cast err to any and then access its properties
      const error = err as { message?: string };
      toast.error(error.message || "Failed to create product");
    }
  };

  return (
    <div className="max-w-lg pt-12 h-auto mx-auto mt-12">
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center text-orange-500 uppercase font-roboto">
          Create A Product
        </h1>
      </div>

      <form
        className="p-5 bg-white border border-orange-500 rounded-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-6 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name", { required: true })} />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">Description is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label>Image Source</Label>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="imageSource"
                  value="file"
                  checked={isFileUpload}
                  onChange={() => setIsFileUpload(true)}
                />
                <span className="ml-2">Upload File</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="imageSource"
                  value="url"
                  checked={!isFileUpload}
                  onChange={() => setIsFileUpload(false)}
                />
                <span className="ml-2">Image URL</span>
              </label>
            </div>
          </div>

          {isFileUpload ? (
            <div className="flex flex-col gap-2">
              <Label htmlFor="image">Image</Label>
              <Input
                type="file"
                id="image"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <p className="text-red-500 text-sm">Image file is required</p>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input id="imageUrl" {...register("image", { required: true })} />
              {errors.image && (
                <p className="text-red-500 text-sm">Image URL is required</p>
              )}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              {...register("category", { required: true })}
            />
            {errors.category && (
              <p className="text-red-500 text-sm">Category is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              id="price"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">Price is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="number"
              id="quantity"
              {...register("quantity", { required: true })}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">Quantity is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="rating">Rating</Label>
            <Input
              type="number"
              id="rating"
              {...register("rating", { required: true, min: 1, max: 5 })}
            />
            {errors.rating?.type === "required" && (
              <p className="text-red-500 text-sm">Rating is required</p>
            )}
            {errors.rating?.type === "min" && (
              <p className="text-red-500 text-sm">Rating must be at least 1</p>
            )}
            {errors.rating?.type === "max" && (
              <p className="text-red-500 text-sm">
                Rating must be no more than 5
              </p>
            )}
          </div>

          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 font-roboto text-white rounded-2xl"
            type="submit"
          >
            {isLoading ? "Loading..." : "Create Product"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
