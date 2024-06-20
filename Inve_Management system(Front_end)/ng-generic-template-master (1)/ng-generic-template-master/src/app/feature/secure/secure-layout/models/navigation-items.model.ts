import { IconOptions } from "@angular/material/icon";

export interface NavigationItem {
    text: string;
    url: string;
    AllowedRole:string[];
    icon: string;
}