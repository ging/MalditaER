import {GLOBAL_CONFIG} from '../config/config.js';

export function isPDFSupported(){
  var pdfReaderSupport = false;
  if((typeof navigator.mimeTypes == "object")&&("application/pdf" in navigator.mimeTypes)){
    pdfReaderSupport = true;
  }
  return pdfReaderSupport;
};