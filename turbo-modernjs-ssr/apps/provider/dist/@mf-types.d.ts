
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/Image';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Image' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Image') :any;