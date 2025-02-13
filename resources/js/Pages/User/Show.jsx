import { USER_STATUS_CLASS_MAP, USER_STATUS_TEXT_MAP } from "@/Constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TasksTable from "../Task/TasksTable";

export default function Show({ auth, user, tasks, queryParams}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {`User "${user.name}"`}
                </h2>
            }
        >
            <Head title={`User "${user.name}"`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div>
                                <img
                                    src={user.image_path}
                                    alt=""
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="grid gap-1 grid-cols-2 mt-2">
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">User ID</label>
                                        <p className="mt-1">{user.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">User Name</label>
                                        <p className="mt-1">{user.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">User Status</label>
                                        <p className="mt-1">
                                            <span
                                                className={
                                                    "px-2 py-1 rounded text-white justify-center " +
                                                    USER_STATUS_CLASS_MAP[user.status]
                                                }
                                            >
                                                {USER_STATUS_TEXT_MAP[user.status]}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Created By</label>
                                        <p className="mt-1">{user.createdBy.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="font-bold text-lg">Due Date</label>
                                    <p className="mt-1">{user.due_date}</p>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Create Date</label>
                                        <p className="mt-1">{user.created_at}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Updated By</label>
                                        <p className="mt-1">{user.updatedBy.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="font-bold text-lg">User Description</label>
                                <p className="mt-1">{user.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 overflow-hidden">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                        <TasksTable 
                            tasks={tasks} 
                            queryParams={queryParams} 
                            hideUserColumn={true}/>
                        </div>
                    </div>
                </div>
            </div>        
        </AuthenticatedLayout>
    );
}
