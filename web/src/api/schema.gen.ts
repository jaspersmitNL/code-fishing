/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/party/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json; charset=utf-8": components["schemas"]["PartyCreateRequest"];
                };
            };
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json; charset=utf-8": components["schemas"]["PartyCreateResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/party/{party_id}/get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    cursor: string;
                };
                header?: never;
                path: {
                    party_id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json; charset=utf-8": components["schemas"]["PartyGetResponse"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maps/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    search: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json; charset=utf-8": components["schemas"]["SearchResponse"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/maps/get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    map_id: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json; charset=utf-8": components["schemas"]["MapResponse"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/guest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json; charset=utf-8": components["schemas"]["GuestResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json; charset=utf-8": components["schemas"]["User"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/oauth/steam": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Redirect to Steam login page */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/html; charset=utf-8": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/oauth/steam/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Handle Steam OAuth callback */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain; charset=utf-8": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** GuestResponse */
        GuestResponse: {
            token: string;
            user: components["schemas"]["User"];
        };
        /** MapData */
        MapData: {
            id: string;
            _type: string;
            /** Format: uint64 */
            seed: number;
            /** Format: uint32 */
            size: number;
            /** Format: uint32 */
            save_version: number;
            image_url: string;
            title_base_url?: string;
            image_icon_url?: string;
            thumbnail_url?: string;
            underground_overlay_url?: string;
            building_block_area_url?: string;
            is_staging: boolean;
            is_custom_map: boolean;
            is_for_sale: boolean;
            is_featured: boolean;
            has_custom_monuments: boolean;
            can_download: boolean;
            download_url?: string;
            slug?: string;
            monuments: unknown[];
            extra: unknown;
        };
        /** MapMeta */
        MapMeta: {
            status: string;
            /** Format: uint32 */
            status_code: number;
        };
        /** MapResponse */
        MapResponse: {
            meta: components["schemas"]["MapMeta"];
            data: components["schemas"]["MapData"];
        };
        /** PartyCreateRequest */
        PartyCreateRequest: Record<string, never>;
        /** PartyCreateResponse */
        PartyCreateResponse: {
            id: string;
            created_at: string;
        };
        /** PartyEntry */
        PartyEntry: {
            entry_id: string;
            user_id: string;
            created_at: string;
            data: components["schemas"]["PartyEntryData"];
        };
        /** PartyEntryCodeSubmit */
        PartyEntryCodeSubmit: {
            codes: string[];
        };
        /** PartyEntryCursorUpdate */
        PartyEntryCursorUpdate: {
            codes: string[];
        };
        PartyEntryData: components["schemas"]["PartyEntryData_PartyEntryCursorUpdate"] | components["schemas"]["PartyEntryData_PartyEntryJoinLeave"] | components["schemas"]["PartyEntryData_PartyEntryCodeSubmit"];
        PartyEntryData_PartyEntryCodeSubmit: {
            /**
             * @example CodeSubmit
             * @enum {string}
             */
            type: "CodeSubmit";
        } & components["schemas"]["PartyEntryCodeSubmit"];
        PartyEntryData_PartyEntryCursorUpdate: {
            /**
             * @example CursorUpdate
             * @enum {string}
             */
            type: "CursorUpdate";
        } & components["schemas"]["PartyEntryCursorUpdate"];
        PartyEntryData_PartyEntryJoinLeave: {
            /**
             * @example JoinLeave
             * @enum {string}
             */
            type: "JoinLeave";
        } & components["schemas"]["PartyEntryJoinLeave"];
        /** PartyEntryJoinLeave */
        PartyEntryJoinLeave: {
            action: string;
        };
        /** PartyGetResponse */
        PartyGetResponse: {
            entries: components["schemas"]["PartyEntry"][];
        };
        /** SearchMeta */
        SearchMeta: {
            status: string;
            /** Format: uint32 */
            status_code: number;
        };
        /** SearchResponse */
        SearchResponse: {
            meta: components["schemas"]["SearchMeta"];
            data: components["schemas"]["Server"][];
        };
        /** Server */
        Server: {
            name: string;
            map_id: string;
            ip: string;
            /** Format: uint16 */
            game_port: number;
            last_wipe_utc: string;
        };
        /** User */
        User: {
            user_id: string;
            name: string;
            avatar_url?: string;
            profile_url?: string;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
