import type React from "react";

export type FileType<T> = {
    name: string;
    component: React.ComponentType<{ data: T }>;
    data: T;
}

export type FolderType<T> = {
    name: string;
    files: FileType<T>[];
}