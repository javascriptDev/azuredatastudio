/**
 * Dusky API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class V1QuobyteVolumeSource {
    'group'?: string;
    'readOnly'?: boolean | null;
    'registry'?: string;
    'tenant'?: string;
    'user'?: string;
    'volume'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "group",
            "baseName": "group",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "registry",
            "baseName": "registry",
            "type": "string"
        },
        {
            "name": "tenant",
            "baseName": "tenant",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1QuobyteVolumeSource.attributeTypeMap;
    }
}

