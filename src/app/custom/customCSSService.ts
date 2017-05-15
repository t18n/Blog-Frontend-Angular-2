export class CustomCSSService {
  public appendToBody(link: string) {
    var existing = document.getElementById(link);
    if (existing != null) {
      return;
    }
      
    var element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet' );
    element.setAttribute('href', link);
    element.setAttribute('id', link);
    document.body.appendChild(element);
  }
    
  public removeFromBody(link: string) {
    var element = document.getElementById(link);
    element.parentNode.removeChild(element);
  }
}
