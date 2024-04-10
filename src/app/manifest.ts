import {MetadataRoute} from "next";
export default function manifest(): MetadataRoute.Manifest {
    return {
        "name": "NextJS PWA Task Manager",
        "short_name": "Task Manager",
        "theme_color": "#102165",
        "background_color": "#004740",
        "display": "fullscreen",
        "orientation": "portrait",
        "scope": "/",
        "start_url": "/",
        "icons": [
            {
                "src": "/icons/icons8-reminders-64",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "maskable"
            },
            {
                "src": "/icons/icons8-reminders-192.png",
                "sizes": "384x384",
                "type": "image/png"
            },
            {
                "src": "/icons/icons8-reminders-512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ],
    }
}