'use client'
import React, { useEffect, useState } from 'react';
import useAxiosAuth from '@/lib/hook/useAxiosHook';
import { Button, Card, CardBody, CardHeader, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
    const { data: session } = useSession();
    const axiosAuth = useAxiosAuth();
    const [modules, setModules] = useState<Module[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [moduleName, setModuleName] = useState<string>('');
    const [moduleDescription, setModuleDescription] = useState<string>('');
    const [selectedModule, setSelectedModule] = useState<Module | null>(null);
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            if (session?.user?.access_token) {
                try {
                    const res = await axiosAuth.get("/modules");
                    if (res.status === 200) {
                        setModules(res.data);
                    }
                } catch (error) {
                    console.error("Error fetching modules:", error);
                } finally {
                    setIsFetching(false);
                }
            }
        };
        fetchData();
    }, [session]);

    const handleCreateModule = async () => {
        try {
            const res = await axiosAuth.post("/modules", {
                moduleName,
                moduleDescription
            });
            if (res.status === 201) {
                toast.success('Module created successfully.');
                // Refresh modules after creation
                getModules();
                onClose();
                setModuleName('');
                setModuleDescription('');
            }
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                const responseData = error.response.data;
                if (responseData && responseData.message) {
                    responseData.message.forEach((errorMessage: string, index: number) => {
                        const messageParts = errorMessage.split(': ');
                        const message = messageParts.length > 1 ? messageParts[1] : errorMessage;
                        toast.error(message);
                    });
                }
            } else {
                toast.error("Error creating module");
            }
        }

    };

    const handleDeleteModule = async (moduleId: number) => {
        try {
            const res = await axiosAuth.delete(`/modules/${moduleId}`);
            if (res.status === 204) {
                // Refresh modules after deletion
                toast.success('Module deleted successfully.');
                getModules();
            }
        } catch (error) {
            console.error("Error deleting module:", error);
        }
    };

    const handleUpdateModule = async () => {
        if (!selectedModule) return;
        try {
            const res = await axiosAuth.put(`/modules/${selectedModule.moduleId}`, {
                moduleName,
                moduleDescription
            });
            if (res.status === 200) {
                // Refresh modules after update
                toast.success('Module updated successfully.');
                getModules();
                onClose();
                setSelectedModule(null);
                setModuleName('');
                setModuleDescription('');
            }
        } catch (error) {
            console.error("Error updating module:", error);
        }
    };

    const getModules = async () => {
        const res = await axiosAuth.get("/modules");
        if (res.status === 200) {
            setModules(res.data);
        }
    };

    const handleEditModule = (module: Module) => {
        setSelectedModule(module);
        setModuleName(module.moduleName);
        setModuleDescription(module.moduleDescription);
        onOpen();
    };


    return (
        <>
            <Toaster />
            <div className='max-w-full flex justify-end rounded-sm mb-4  px-6'>
                <Button onPress={onOpen} color="secondary">+ Create Module</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {modules.map((module) => (
                    <Card key={module.moduleId} className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">{module.moduleName}</p>
                            <small className="text-default-500">{module.moduleDescription}</small>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <img
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="https://nextui.org/images/hero-card-complete.jpeg"
                                width={270}
                            />
                        </CardBody>
                        <div className="flex gap-2 justify-center px-4 pb-4">
                            <Button className='bg-red-500' onClick={() => handleDeleteModule(module.moduleId)} >Delete</Button>
                            <Button className='bg-purple-600' onClick={() => handleEditModule(module)}>Edit</Button>
                        </div>
                    </Card>
                ))}
            </div>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className='bg-white backdrop-blur-lg dark:bg-black dark:bg-opacity-30'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>{selectedModule ? "Edit Module" : "Create Module"}</ModalHeader>
                            <ModalBody>
                                <Input value={moduleName} onChange={(e) => setModuleName(e.target.value)} type="text" variant="bordered" label="Module Name" />
                                <Input value={moduleDescription} onChange={(e) => setModuleDescription(e.target.value)} type="text" variant="bordered" label="Module Description" />
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={onClose}>Cancel</Button>
                                {selectedModule ? (
                                    <Button className='bg-purple-600' onClick={handleUpdateModule}>Update</Button>
                                ) : (
                                    <Button className='bg-purple-600' onClick={handleCreateModule}>Create</Button>
                                )}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default Page;
