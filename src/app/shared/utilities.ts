export class PathResolver {
    static resolveViewPath(view: string): string {
        return 'www/app/' + view + '/' + view + '.tmpl.html';
    }

    static resolveStylesPath(view: string): string {
        return 'www/app/' + view + '/' + view + '.style.css';
    }
}

export class Utils {
    static replace(source: string): (key: string, value: string) => any {
        return function self(key: string, value: string): any {
            if (!key) return source;
            source = source.replace(key, value);
            return self;
        };
    }    
}