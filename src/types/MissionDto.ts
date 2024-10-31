export default interface MissionDto {
    name: string;
    status: "Pending" | "In Progress" | "Completed";
    priority: "Low" | "High" | "Medium";
    description: string;
}
