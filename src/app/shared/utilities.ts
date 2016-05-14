export class PathResolver {
    static resolveViewPath(view: string): string {
        return 'www/app/' + view + '/' + view + '.tmpl.html';
    }
    
    static resolveStylesPath(view: string): string {
        return 'www/app/' + view + '/' + view + '.style.css';
    }
}