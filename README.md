# **GSA Public Facility API Prototype Version-1**

Demo: https://jamesperrin.github.io/gsa-public-facility-api-v1

## **Purpose**

**gsa-public-facility-api-v1**  is a prototype for an [USAJOBS.gov Open Opportunities](https://openopps.usajobs.gov) task.

* [Open Opportunities](https://openopps.usajobs.gov) is creating a network of federal employees that will lead to a more effective, efficient, responsive government by sharing skills and collaborating on projects that support the mission of an agency or the government as a whole.

### **[Task Description:](https://openopps.usajobs.gov/tasks/708)**

> When nature strikes, federal buildings often close. Our page (gsa.gov/facilitystatus) tells feds which buildings are closed. The page is currently updated by hand. But we have a Google Sheet on a Google Site where all this data is located.
> 
> I'd like some help developing an API to connect gsa.gov with the back-end data. We'd need someone to help with all facets of the software development lifecycle including the requirements, design, testing, security, implementation, and monitoring and maintenance of back-end software applications and APIs.
> 
> We don't need an expert; we just need someone with an interest in this area willing to learn. We're a very supportive team.

## **API Version-1**

The API version-1 prototype demonstrates three different methods of consuming public building data.

### **Version-1a**

Version-1a demonstrates consuming a flat file data in the following formats.

1. A JSON object of a named JavaScript array.
2. A JavaScript array of JSON objects.
3. A JSON object of a named JavaScript array of JSON objects.

* _Technology stack:_ [VanillaJS](http://vanilla-js.com/), [jQuery](https://jquery.com/), [Datatables.js](https://datatables.net/), flat file data

### **Version-1b**

Version-1b demonstrates consuming a Google Sheet as a data source with using VallinaJS for custom data retrieval and processing.

* _Technology stack:_ [VanillaJS](http://vanilla-js.com/), [jQuery](https://jquery.com/), [Datatables.js](https://datatables.net/), [Google Sheets](https://www.google.com/sheets/about/)

### **Version-1c**

Version-1c demonstrates consuming a Google Sheet as a data source and using [Tabletop.js](https://github.com/jsoma/tabletop) library for data retrieval and processing.

* _Technology stack:_ [VanillaJS](http://vanilla-js.com/), [jQuery](https://jquery.com/), [Datatables.js](https://datatables.net/), [Tabletop.js](https://github.com/jsoma/tabletop) , [Google Sheets](https://www.google.com/sheets/about/)
