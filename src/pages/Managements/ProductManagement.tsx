import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
import { Button } from "@/root/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/root/ui/table";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ProductManagement = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteProduct(id).unwrap();
          if (res?.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          }
        } catch (err) {
          toast.error("Failed to delete product");
        }
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto py-20 px-3 ">
      <div className="border border-gray-400 rounded-lg p-8">
        <div className="pb-6 flex items-center justify-between border-b border-gray-400">
          <Link to="/create-product">
            <Button className="bg-gray-600 text-white hover:bg-gray-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Create A New Product
            </Button>
          </Link>
          <h2 className="text-xl text-gray-600 font-bold">
            Total: {data?.data?.length}
          </h2>
        </div>
        <Table className="p-12 min-w-[570px] md:w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item) => (
              <TableRow key={item._id}>
                <TableCell>
                  <img
                    className="object-cover rounded-lg size-14"
                    src={item.image}
                    alt={item.name}
                  />
                </TableCell>
                <TableCell className="text-sm">{item.name}</TableCell>
                <TableCell>$ {item.price} USD</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Link to={`/update-product/${item._id}`}>
                    <Button className="bg-gray-600 hover:bg-gray-500 hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Button>
                  </Link>

                  <Button
                    onClick={() => handleDelete(item._id)}
                    variant={"destructive"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductManagement;
