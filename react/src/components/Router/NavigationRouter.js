// imports
import RouterBase from './RouterBase';

// NavigationRouter component
class NavigationRouter extends RouterBase {
  // routing function
  // you should make your own router that extends this and override this function
  getRoutedElements() {
    // retrieves the url data
    const urlData = this.retrieveUrlData();
    
    // does the routing
    // something like if(urlData.route == 'index.php') { return <IndexComponent />;}
    // but for now, let's just return the children
    return this.props.children;
  }
}

// exports router
export default NavigationRouter;