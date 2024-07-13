declare module "imagekit-javascript" {
  export interface ImageKitOptions {
    publicKey: string;
    urlEndpoint: string;
    authenticationEndpoint?: string;
  }

  export interface UploadOptions {
    file: File | string;
    fileName: string;
    folder?: string;
    tags?: string[];
    customCoordinates?: string;
    isPrivateFile?: boolean;
    customMetadata?: Record<string, any>;
    responseFields?: string[];
  }

  export interface UploadResponse {
    fileId: string;
    name: string;
    size: number;
    versionInfo: { id: string; name: string };
    fileType: string;
    height: number;
    width: number;
    url: string;
    thumbnailUrl: string;
    AITags: string[];
  }

  export default class ImageKit {
    constructor(options: ImageKitOptions);

    upload(options: UploadOptions): Promise<UploadResponse>;
  }
}
