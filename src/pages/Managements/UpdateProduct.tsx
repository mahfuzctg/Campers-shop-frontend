import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import Button from "@/root/ui/button";
import { Input } from "@/root/ui/input";
import { Label } from "@/root/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

// Define an interface for the form data
interface ProductFormData {
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
  category: string;
  rating: number;
}

const UpdateProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading: isProductLoading } =
    useGetSingleProductQuery(id);

  const navigate = useNavigate();
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  // Use the defined type for useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();

  if (isProductLoading) {
    return <div>Loading...</div>;
  }

  // Update the onSubmit function to use the correct type
  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    const productData = {
      name: data.name,
      price: data.price,
      description: data.description,
      image: data.image,
      quantity: data.quantity,
      category: data.category,
      rating: data.rating,
    };

    const updateProductData = {
      id,
      updatedData: productData,
    };

    try {
      const res = await updateProduct(updateProductData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        navigate("/product-management");
      }
    } catch (err) {
      toast.error("Failed to update product");
    }
  };

  return (
    <div className="max-w-lg  pt-12 h-auto mx-auto mt-12">
      <div>
        <h1 className="text-3xl  font-bold mb-5 text-center text-orange-500 uppercase font-roboto">
          Update A Product
        </h1>
      </div>

      <form
        className="p-5 bg-white border border-orange-500 rounded-2xl "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-6 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              defaultValue={product?.data?.name}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              defaultValue={product?.data?.description}
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">Description is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="image">Image</Label>
            <Input
              className="border border-gray-400"
              defaultValue={product?.data?.image}
              id="image"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">Image is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              defaultValue={product?.data?.category}
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
              defaultValue={product?.data?.price}
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
              defaultValue={product?.data?.quantity}
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
              defaultValue={product?.data?.rating}
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
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-roboto"
            type="submit"
          >
            {isLoading ? "Loading..." : "Update Product"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
