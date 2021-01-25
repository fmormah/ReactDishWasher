import $ from 'jquery';
window.$ = window.jQuery = $;
var contentful = require('contentful');

class Utils{
  constructor() {

    const prodToken = '719618437195bbd14fd5aac5268a101efbe08b8fe3a018842ee2afc6f55a281e';
    const stagingToken = 'c9f5aee797bd06ab32644e36e00eb81fde2387ae27900eed2acb63c8a429a488';
    
    this.client = contentful.createClient({
        space: '8if5u61dehhn',
        accessToken: prodToken
    });

    this.getContent = this.getContent.bind(this);


  }


  getContent(component, contentId, callback){
    this.client.getEntry(contentId)
    .then(function (entry) {

      // logs the entry metadata
      console.log(entry.sys);

      component.setState({
        entry:entry
      });

      if(callback){
        callback();
      }
      
      // logs the field with ID title
      console.log(entry.fields.productName)
    })
  };

}

export default Utils;
