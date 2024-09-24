"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72],{65445:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var a=t(27378),r=t(20951);function l(e){const n=Object.assign({blockquote:"blockquote",p:"p",a:"a",h1:"h1",div:"div",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre",img:"img"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"This article was first published @medium: ",a.createElement(n.a,{href:"https://medium.com/@ivangsa/stop-writing-yaml-for-openapi-use-a-compact-dsl-and-save-time-and-typing-574a138faddc"},"Stop writing YAML for OpenAPI, use a compact DSL and save time and typing"),"."),"\n"),"\n",a.createElement(n.h1,{id:"generating-openapi-definition-files-from-zenwave-domain-language-models-with-zenwavesdk",style:{position:"relative"}},a.createElement(n.a,{href:"#generating-openapi-definition-files-from-zenwave-domain-language-models-with-zenwavesdk","aria-label":"generating openapi definition files from zenwave domain language models with zenwavesdk permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),'Generating OpenAPI definition files from "ZenWave Domain Language" models with ZenWaveSDK'),"\n",a.createElement(n.p,null,"Because writing YAML by hand is now fun..."),"\n",a.createElement(n.p,null,"You can use ",a.createElement(n.code,null,"ZenWave Domain Language")," models as IDL to generate OpenAPI v3 with ZenWave SDK."),"\n",a.createElement(n.p,null,"Imagine being able to quickly define an API in a more concise and readable way, without losing the rigor of an OpenAPI specification. This article explores how you can leverage ",a.createElement(n.a,{href:"https://www.zenwave360.io/docs/event-driven-design/zenwave-domain-language"},"ZenWave Domain Language (ZDL)"),", a compact developer-friendly DSL, to generate OpenAPI definitions, simplifying the process of creating API documentation, reducing errors, and improving developer productivity. Whether you're managing an extensive API or just getting started, a DSL might be the key to making your API workflow more efficient."),"\n",a.createElement(n.h2,{id:"zenwave-domain-language-zdl",style:{position:"relative"}},a.createElement(n.a,{href:"#zenwave-domain-language-zdl","aria-label":"zenwave domain language zdl permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"ZenWave Domain Language (ZDL)"),"\n",a.createElement(n.p,null,"Inspired by JHipster JDL, ZDL is a language for describing DDD Bounded Contexts, including domain entities and their relationships, services, commands, events and business policies... for Event-Driven Architectures."),"\n",a.createElement(n.p,null,"It's designed to be compact, readable and expressive. Developer friendly, and machine friendly. It works well as an Ubiquitous Language format."),"\n",a.createElement(n.p,null,"It can also be used as an IDL for authoring OpenAPI (and AsyncAPI) definition files."),"\n",a.createElement("img",{src:"https://www.zenwave360.io/static/EventStorming-ZDL-Mapping-cb9c987d5d0aff110c5890481034ae20.png"}),"\n",a.createElement(n.h2,{id:"creating-a-zdl-for-authoring-an-openapi-definition",style:{position:"relative"}},a.createElement(n.a,{href:"#creating-a-zdl-for-authoring-an-openapi-definition","aria-label":"creating a zdl for authoring an openapi definition permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Creating a ZDL for authoring an OpenAPI definition"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"As a minimum requirement, you need a ",a.createElement(n.code,null,"service")," and an ",a.createElement(n.code,null,"aggregate entity")," for this service."),"\n",a.createElement(n.li,null,"You can use this ",a.createElement(n.code,null,"entity")," as request and response objects or you can define separate DTOs for this purpose using ",a.createElement(n.code,null,"input"),"and ",a.createElement(n.code,null,"output")," entities."),"\n",a.createElement(n.li,null,"You can also define and reference ",a.createElement(n.code,null,"enums")," and ",a.createElement(n.code,null,"relationships")," between entities. Nested entities and arrays also work."),"\n",a.createElement(n.li,null,"Lastly you need to define the service methods and their parameters and annotate them using ",a.createElement(n.code,null,"@rest"),", ",a.createElement(n.code,null,"@post"),", ",a.createElement(n.code,null,"@get"),", ",a.createElement(n.code,null,"@put"),", ",a.createElement(n.code,null,"@delete"),", ",a.createElement(n.code,null,"@paginated"),", ",a.createElement(n.code,null,"@inline")," annotations."),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-zdl"},'@aggregate\r\nentity PaymentMethod {\r\n    type PaymentMethodType required\r\n    cardNumber String required minlength(16) maxlength(16)\r\n}\r\n\r\nenum PaymentMethodType { VISA(1), MASTERCARD(2) }\r\n\r\n@rest("/payment-methods")\r\nservice PaymentsService for (PaymentMethod) {\r\n    @post\r\n    doSomethingWithANewPayment(PaymentMethod) PaymentMethod\r\n\r\n    @put("/{id}")\r\n    doSomethingWithAnExistingPayment(id, PaymentMethod) PaymentMethod?\r\n}\n')),"\n",a.createElement(n.p,null,"NOTE: service method only accept two kind of parameters: ",a.createElement(n.code,null,"id")," and command payload (that will map to the request body), but you can use ",a.createElement(n.code,null,"@inline")," to expand fields as request path parameters (see below)."),"\n",a.createElement(n.p,null,"Checkout the ",a.createElement(n.a,{href:"https://www.zenwave360.io/docs/event-driven-design/zenwave-domain-language#services-and-commands"},"ZDL documentation")," for more details about command methods."),"\n",a.createElement(n.h2,{id:"install-zenwave-sdk-using-jbang",style:{position:"relative"}},a.createElement(n.a,{href:"#install-zenwave-sdk-using-jbang","aria-label":"install zenwave sdk using jbang permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Install ZenWave SDK Using JBang"),"\n",a.createElement(n.p,null,"Install an evergreen self updating ZenWave SDK CLI using JBang:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"jbang alias add --fresh --name=zw release@zenwave360/zenwave-sdk\n")),"\n",a.createElement(n.p,null,"Following these instructions for complete details about JBang and IntelliJ Editor: ",a.createElement(n.a,{href:"https://www.zenwave360.io/docs/getting-started/"},"https://www.zenwave360.io/docs/getting-started/")),"\n",a.createElement(n.p,null,"Now you can use jbang zw to generate a complete OpenAPI definition file from your ZDL model."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"jbang zw -p ZDLToOpenAPIPlugin \\\r\nspecFile=model.zdl \\\r\nidType=integer \\\r\nidTypeFormat=int64 \\\r\ntargetFolder=. \\\r\ntargetFile=payments-openapi.yml\n")),"\n",a.createElement(n.p,null,"Or use ZenWave ZDL Editor for IntelliJ configuring the generator plugin on top of your zdl file:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-zdl"},'config {\r\n    plugins {\r\n        /** Use ZenWave Editor for IntelliJ IDEA to run this */\r\n        ZDLToOpenAPIPlugin {\r\n            idType integer\r\n            idTypeFormat int64\r\n            targetFolder "."\r\n            targetFile "openapi.yml"\r\n        }\r\n    }\r\n}\n')),"\n",a.createElement(n.p,null,a.createElement(n.img,{src:"./RunWith-ZenWave-Editor-for-IntelliJ.png",alt:"Run With ZenWave Editor for IntelliJ"})),"\n",a.createElement(n.p,null,"Then, check the generated OpenAPI definition file payments-openapi.yml, and see for yourself how much typing you saved!"),"\n",a.createElement(n.h2,{id:"expanding-fields-as-request-path-parameters",style:{position:"relative"}},a.createElement(n.a,{href:"#expanding-fields-as-request-path-parameters","aria-label":"expanding fields as request path parameters permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Expanding fields as request path parameters"),"\n",a.createElement(n.p,null,"You can use ",a.createElement(n.code,null,"@inline")," ",a.createElement(n.code,null,"ìnputs")," to expand fields as request path parameters (and service method parameters)."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-zdl"},'@inline // expand fields as request parameters\r\ninput PaymentMethodInput {\r\n    cardNumber String\r\n    paymentMethod PaymentMethod\r\n}\r\n\r\n@rest("/customers")\r\nservice PaymentsService for (PaymentMethod) {\r\n\r\n    @put("/{paymentMethodId}/cardNumber/{cardNumber}") // see example below to specify param types\r\n    updatePaymentMethodByCardNumber(PaymentMethodInput) PaymentMethod?\r\n}\n')),"\n",a.createElement(n.p,null,"It will pick the first parameter from the entity id and the remaining parameters will be configured as ",a.createElement(n.code,null,"string")),"\n",a.createElement(n.p,null,a.createElement(n.img,{src:"./InlinePathParameters-OpenAPI-Generated.png",alt:"Inline Path Parameters OpenAPI Generated"})),"\n",a.createElement(n.p,null,"But you can override the path params with configuration, see complete example below."),"\n",a.createElement(n.h2,{id:"complete-zdl-example",style:{position:"relative"}},a.createElement(n.a,{href:"#complete-zdl-example","aria-label":"complete zdl example permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Complete ZDL Example"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-zdl"},'@aggregate\r\nentity Customer {\r\n    name String required maxlength(254) /** Customer name */\r\n    email String required maxlength(254) pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/)\r\n    /** Customer Addresses can be stored in a JSON column in the database. */\r\n    @json addresses Address[] minlength(1) maxlength(5) {\r\n        street String required maxlength(254)\r\n        city String required maxlength(254)\r\n    }\r\n}\r\n\r\nentity PaymentMethod {\r\n    type PaymentMethodType required\r\n    cardNumber String required\r\n}\r\n\r\nenum PaymentMethodType { VISA(1), MASTERCARD(2) }\r\n\r\nrelationship OneToMany {\r\n    Customer{paymentMethods required maxlength(3)} to PaymentMethod{customer required}\r\n}\r\n\r\n// you can create \'inputs\' as dtos for your service methods, or use entities directly\r\ninput CustomerSearchCriteria {\r\n    name String\r\n    email String\r\n    city String\r\n    state String\r\n}\r\n\r\n@inline // expand fields as request parameters (and service method parameters)\r\ninput AddressInput {\r\n    addressId String\r\n    address Address\r\n}\r\n\r\n@rest("/customers")\r\nservice CustomerService for (Customer) {\r\n    @post\r\n    createCustomer(Customer) Customer\r\n    @get("/{id}")\r\n    getCustomer(id) Customer?\r\n    @put("/{id}")\r\n    updateCustomer(id, Customer) Customer?\r\n    @put({ path: "/{customerId}/address/{addressId}", params: {addressId: Long} }) // specify param types\r\n    updateCustomerAddress(id, AddressInput) Customer?\r\n    @delete("/{id}")\r\n    deleteCustomer(id)\r\n    @post("/search")\r\n    @paginated\r\n    searchCustomers(CustomerSearchCriteria) Customer[]\r\n}\n')),"\n",a.createElement(n.p,null,"Run:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"jbang zw -p io.zenwave360.sdk.plugins.ZDLToOpenAPIPlugin \\\r\n    specFile=customers-model.zdl \\\r\n    idType=integer \\\r\n    idTypeFormat=int64 \\\r\n    targetFolder=. \\\r\n    targetFile=openapi.yml\n")),"\n",a.createElement(n.p,null,"And get surprised by the amount of YAML typing you saved!"),"\n",a.createElement(n.p,null,"Happy coding! 🚀"))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(l,e)):l(e)};function o(e){let{children:n}=e;return n}function s(e){return a.createElement(o,e,a.createElement(i,e))}}}]);
//# sourceMappingURL=component---node-modules-smooth-doc-src-templates-post-js-content-file-path-c-users-ivangsa-workspace-zenwave-zen-wave-360-github-io-website-pages-posts-zen-wave-zdl-as-idl-for-open-api-md-08b71c09556d72c9cbe0.js.map