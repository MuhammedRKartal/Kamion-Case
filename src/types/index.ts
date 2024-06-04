export interface ClientRequestOptions {
  useTrailingSlash?: boolean;
  useFormData?: boolean;
  accept?: string;
  contentType?: string | null;
  responseType?: "json" | "text";
}
