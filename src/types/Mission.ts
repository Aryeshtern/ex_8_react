
export default interface Mission {
    _id: string;
    name: string;
    status: "Pending" | "In Progress" | "Completed";
    priority: "Low" | "High" | "Medium";
    description: string;
}

