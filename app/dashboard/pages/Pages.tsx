"use client";
import {
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tooltip,
    useDisclosure,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useAxiosAuth from "@/lib/hook/useAxiosHook";

const Pages = () => {
    const { data: session } = useSession();
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [categories, setCategories] = useState<[CategoryType]>();
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [categoryTitle, setCategoryTitle] = useState("")
    const [categoryDescription, setCategoryDescrtiption] = useState("")
    const [updateCatId, setUpdateCatId] = useState<number>()
    const clear = () => {
        setCategoryDescrtiption("")
        setCategoryTitle("")
        setUpdateCatId(undefined)
    }
    const axiosAuth = useAxiosAuth();
    const handleNew = () => {
        clear();
        onOpen();
    }


    const deleteCategory = async (id: number) => {
        const res = await axiosAuth.delete(`/categories/${id}`);
        if (res.status == 200) {
        }
    };
    const getCategories = async () => {
        const res = await axiosAuth.get("/categories")
        if (res.status == 200) setCategories(res.data)
    }
    const handleUpdate = async (category: CategoryType) => { };

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            if (session?.user?.token?.accessToken) {
                try {
                    getCategories();
                } catch (error) {
                    console.error("Error fetching categories:", error);
                } finally {
                    setIsFetching(false);
                }
            }
        };
        fetchData();
    }, [session, categories]);


    const [page, setPage] = React.useState(1);
    const rowsPerPage = 10;
    const pages = Math.ceil((categories?.length || 1) / rowsPerPage);
    const items = React.useMemo(() => {
        if (!categories) {
            return [];
        }
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return categories.slice(start, end);
    }, [page, categories]);
    return (
        <Table
            className="backdrop-blur-sm dark:backdrop-blur-sm dark:bg-opacity-20"
            aria-label="Example table with client side pagination"
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        className=""
                        isCompact
                        showControls
                        showShadow
                        page={page}
                        total={pages}
                        initialPage={1}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }
            classNames={{
                wrapper: "min-h-[222px]",
            }}

        >

            <TableHeader className="bg-red-500">
                <TableColumn key="categoryTitle" className="lg:w-1/4">
                    Photo
                </TableColumn>
                <TableColumn key="categoryTitle" className="lg:w-1/4">
                    Username
                </TableColumn>
                <TableColumn key="categoryDescription" className="lg:w-1/4">
                    Email
                </TableColumn>
                <TableColumn key="categoryDescription" className="lg:w-2/4">
                    Role
                </TableColumn>
                <TableColumn key="categoryDescription" className="lg:w-2/4">
                    Stauts
                </TableColumn>
                <TableColumn key="actions" className="lg:w-1/4">
                    Action
                </TableColumn>
            </TableHeader>
            <TableBody items={items} className="dark:bg-transparent">
                {(item) => (
                    <TableRow key={item.id}>
                        <TableCell className="lg:w-1/4">
                            {item.categoryTitle}
                        </TableCell>
                        <TableCell className="lg:w-2/4">
                            {item.categoryDescription}
                        </TableCell>
                        <TableCell className="lg:w-1/4">
                            {/* Edit Button */}
                            <Tooltip content="Edit category">
                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50 mr-5">
                                    <i
                                        className="ri-pencil-line"
                                        onClick={() => {
                                            handleUpdate(item);
                                        }}
                                    ></i>
                                </span>
                            </Tooltip>
                            {/* Delete Button */}
                            <Tooltip color="danger" content="Delete category">
                                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                    <i
                                        className="ri-delete-bin-line"
                                        onClick={() => deleteCategory(item.id)}
                                    ></i>
                                </span>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}
export default Pages;