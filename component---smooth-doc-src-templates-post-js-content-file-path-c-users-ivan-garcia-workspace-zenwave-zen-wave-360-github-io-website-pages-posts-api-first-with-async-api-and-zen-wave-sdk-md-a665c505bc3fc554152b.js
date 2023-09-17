"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[178],{30205:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var a=t(27378),r=t(20951);function s(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",ul:"ul",li:"li",strong:"strong",h2:"h2",img:"img",code:"code",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",pre:"pre"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h1,{id:"api-first-with-asyncapi",style:{position:"relative"}},a.createElement(n.a,{href:"#api-first-with-asyncapi","aria-label":"api first with asyncapi permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"API-First with AsyncAPI"),"\n",a.createElement(n.p,null,"If you are familiar with OpenAPI and OpenAPI Generator API-First workflow:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"First write the OpenAPI definition, collaborating between API providers and API consumers."),"\n",a.createElement(n.li,null,"Then use OpenAPI Generator, either the maven plugin or a CLI, to generate some DTOs and interfaces from your OpenAPI definition."),"\n",a.createElement(n.li,null,"Implementing the generated interfaces you can create a service for the API."),"\n",a.createElement(n.li,null,"As a client, you can use generated the interfaces to consume the API with some HTTP client generated behind the scenes."),"\n"),"\n",a.createElement(n.p,null,"When doing API-First with AsyncAPI, the process is similar. After you generate some interfaces and DTOs from your API definition, you use the generated interfaces to produce messages, sending them to the broker, and implement them to consume messages from the broker."),"\n",a.createElement(n.p,null,"There is still a fundamental difference between OpenAPI and AsyncAPI: OpenAPI is used to document Request-Response / Client-Server APIs, while AsyncAPI is used to document Event-Driven APIs which, except for websockets, are Broker-based."),"\n",a.createElement(n.p,null,"And broker-based APIs, unlike Client-Server, are inherently ",a.createElement(n.strong,null,"symmetric"),"."),"\n",a.createElement(n.h2,{id:"broker-based-apis-are-symmetric",style:{position:"relative"}},a.createElement(n.a,{href:"#broker-based-apis-are-symmetric","aria-label":"broker based apis are symmetric permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Broker-based APIs are Symmetric"),"\n",a.createElement(n.p,null,a.createElement(n.img,{src:"client-server-vs-broker-eda.excalidraw.svg",alt:"Client-server vs broker-based EDAs"})),"\n",a.createElement(n.p,null,"Because APIs mediated by a broker are inherently ",a.createElement(n.strong,null,"symmetric")," it's difficult to establish the roles of client/server: what represents a ",a.createElement(n.code,null,"publish")," operation from one side will be a ",a.createElement(n.code,null,"subscribe")," operation seen from the other side. Also, a given service can act as a publisher and subscriber on the same API."),"\n",a.createElement(n.p,null,"For these reasons, to avoid defining the same API operations multiple times from each perspective, we propose to define the API only once from the perspective of the provider of the functionality, which may be a producer, a consumer or both."),"\n",a.createElement(n.p,null,"Some definitions:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"SERVICE: An independent piece of software, typically a microservice, that provides a set of capabilities to other services."),"\n",a.createElement(n.li,null,"PROVIDER: The service that implements the functionality of the API. It may be accepting asynchronous command request or publishing business domain events."),"\n",a.createElement(n.li,null,"CLIENT/s: The service/s that makes use of the functionality of the API. It may be requesting asynchronous commands or subscribing to business domain events."),"\n",a.createElement(n.li,null,"PRODUCER: A service that writes a given message."),"\n",a.createElement(n.li,null,"CONSUMER: A service that reads a given message."),"\n"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"Define your AsyncAPI from the perspective of the ",a.createElement(n.strong,null,"PROVIDER")," of the functionality, which may be a producer, a consumer or both. Share this definition with your ",a.createElement(n.strong,null,"CLIENTS"),"."),"\n"),"\n",a.createElement(n.p,null,"Use the table to understand which section of AsyncAPI (publish or subscribe) to use for each topic, and which role (provider or client) to use on the plugin configuration."),"\n",a.createElement(n.table,null,a.createElement(n.thead,null,a.createElement(n.tr,null,a.createElement(n.th),a.createElement(n.th,null,"Events"),a.createElement(n.th,null,"Commands"))),a.createElement(n.tbody,null,a.createElement(n.tr,null,a.createElement(n.td,null,"Provider"),a.createElement(n.td,null,"Produces (publish)"),a.createElement(n.td,null,"Consumes (subscribe)")),a.createElement(n.tr,null,a.createElement(n.td,null,"Client"),a.createElement(n.td,null,"Consumes (subscribe)"),a.createElement(n.td,null,"Produces (publish)")),a.createElement(n.tr,null,a.createElement(n.td,null,"OperationId Suggested Prefix"),a.createElement(n.td,null,a.createElement(n.strong,null,"on"),"<Event Name>"),a.createElement(n.td,null,a.createElement(n.strong,null,"do"),"<Command Name>")))),"\n",a.createElement(n.p,null,"If you still find confusing which one is a provider and a client just use this rule: it can be only one provider of a given message while clients of a given message there can be many:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"If the provider is the producer use publish section"),"\n",a.createElement(n.li,null,"If is the consumer use subscribe section."),"\n"),"\n",a.createElement(n.h2,{id:"events-commands-and-messages",style:{position:"relative"}},a.createElement(n.a,{href:"#events-commands-and-messages","aria-label":"events commands and messages permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Events, Commands, and Messages"),"\n",a.createElement(n.p,null,"In a messaging system, there are two types of messages: events and commands. An event message describes a change that has already happened, while a command message describes an operation that needs to be carried out. In other words, events are used to notify subscribers about something that has already occurred, while commands are used to initiate an action or process."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Event:")," A message describing a change that has already happened."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Command:")," A message describing an operation that has to be carried out."),"\n"),"\n",a.createElement(n.p,null,"Also, while there can be only one provider that produces a given event, but commands can be issued for one or many client producers."),"\n",a.createElement(n.h2,{id:"understanding-asyncapi-definition",style:{position:"relative"}},a.createElement(n.a,{href:"#understanding-asyncapi-definition","aria-label":"understanding asyncapi definition permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Understanding AsyncAPI Definition"),"\n",a.createElement(n.p,null,"While OpenAPI and AsyncAPI come to document completely different architectural styles, they are similar in many aspects, in fact AsyncAPI YAML format was originaly based on OpenAPI format and structure."),"\n",a.createElement(n.p,null,"If you are familiar with OpenAPI you may find useful the following image borrowed from AsyncAPI documentation (click image to follow):"),"\n",a.createElement(n.p,null,a.createElement(n.a,{href:"https://www.asyncapi.com/docs/tutorials/getting-started/coming-from-openapi"},a.createElement(n.img,{src:"/resources/openapi-asyncapi.png",alt:"OpenAPI and AsyncAPI"}))),"\n",a.createElement(n.h3,{id:"info",style:{position:"relative"}},a.createElement(n.a,{href:"#info","aria-label":"info permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Info"),"\n",a.createElement(n.p,null,"Document your API: name, purpose, contact details, license..."),"\n",a.createElement(n.h3,{id:"servers",style:{position:"relative"}},a.createElement(n.a,{href:"#servers","aria-label":"servers permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Servers"),"\n",a.createElement(n.p,null,"Document where your API will be deployed and required security..."),"\n",a.createElement(n.p,null,"You can also document some server ",a.createElement(n.strong,null,"protocol specific configurations")," using free-form ",a.createElement(n.strong,null,"bindings")," property"),"\n",a.createElement(n.h3,{id:"channels-publish--subscribe",style:{position:"relative"}},a.createElement(n.a,{href:"#channels-publish--subscribe","aria-label":"channels publish  subscribe permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Channels: Publish / Subscribe"),"\n",a.createElement(n.p,null,"Each channel represent one single broker topic, channel, queue... where you are about to publish or subscribe to."),"\n",a.createElement(n.p,null,"Use table above to understand which section, publish or subscribe, you may want to use."),"\n",a.createElement(n.p,null,"In a nutshell:"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"Providers publish events and subscribe to commands/queries/requests."),"\n"),"\n",a.createElement(n.p,null,"If you still find confusing which is a provider and a client just use this rule: In a given messaging scenario, there can be only one provider of a message, while there can be multiple clients.. If the provider is producing messages, use the ",a.createElement(n.code,null,"publish")," section. If the provider is consuming messages, use the ",a.createElement(n.code,null,"subscribe")," section."),"\n",a.createElement(n.h3,{id:"messages",style:{position:"relative"}},a.createElement(n.a,{href:"#messages","aria-label":"messages permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Messages"),"\n",a.createElement(n.p,null,"Use Messages to describe ",a.createElement(n.strong,null,"Headers"),", ",a.createElement(n.strong,null,"Payload Schema")," and ",a.createElement(n.strong,null,"Content Type"),". You can also include examples, descriptions and protocol-specific binding documentation..."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-yml"},'components:\r\n  messages:\r\n    turnOnOff:\r\n      name: turnOnOff\r\n      title: Turn on/off\r\n      summary: Command a particular streetlight to turn the lights on or off.\r\n      headers:\r\n        type: object\r\n        properties:\r\n          my-app-header:\r\n            type: string\r\n      payload:\r\n        $ref: "#/components/schemas/turnOnOffPayload"\r\n\n')),"\n",a.createElement(n.h3,{id:"message-payloads--schemas",style:{position:"relative"}},a.createElement(n.a,{href:"#message-payloads--schemas","aria-label":"message payloads  schemas permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Message Payloads / Schemas"),"\n",a.createElement(n.p,null,"You can define message payloads as:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Inline components/schemas in the same familiar way you do in OpenAPI"),"\n",a.createElement(n.li,null,"External files: both ",a.createElement(n.code,null,"json-schema")," and ",a.createElement(n.code,null,"avro schemas")," (.avsc) are supported"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-yml"},'components:\r\n  messages:\r\n    MessageWithAsyncAPISchema:\r\n      payload:\r\n        $ref: "#/components/schemas/turnOnOffPayload" ## asyncapi/inline schema\r\n    MessageWithExternalJsonSchema:\r\n      schemaFormat: \'application/schema+json;version=draft-07\'\r\n      payload:\r\n        $ref: "some/external/file.schema" ## a json-schema file\r\n    MessageWithAvroSchema:\r\n      schemaFormat: application/vnd.apache.avro+json;version=1.9.0\r\n      payload:\r\n        $ref: "v1/imports/file.avsc" ## and avro schema file\n')),"\n",a.createElement(n.h3,{id:"reusing-configurations-operation-traits-message-traits",style:{position:"relative"}},a.createElement(n.a,{href:"#reusing-configurations-operation-traits-message-traits","aria-label":"reusing configurations operation traits message traits permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Reusing Configurations: Operation Traits, Message Traits..."),"\n",a.createElement(n.p,null,"Operation Traits, Message Traits are an excellent way to reuse chunks of configuration between different operations or messages."),"\n",a.createElement(n.p,null,"For instance if various messages share some common headers, you can configure them as Message Traits:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-yml"},"components:\r\n  messages:\r\n    CustomerEventMessage:\r\n      name: CustomerEventMessage\r\n      title: Async Event for a Customer\r\n      summary: Async Event for a Customer\r\n      schemaFormat: application/vnd.aai.asyncapi;version=2.4.0\r\n      traits:\r\n      - $ref: '#/components/messageTraits/CommonHeaders' # 'CommonHeaders' contents will replace 'traits' property\r\n      payload:\r\n      $ref: '#/components/schemas/CustomerEventPayload'\r\n\r\n  messageTraits:\r\n    CommonHeaders:\r\n      headers:\r\n      type: object\r\n      properties:\r\n      my-app-header:\r\n        type: integer\r\n        minimum: 0\r\n        maximum: 100\n")),"\n",a.createElement(n.p,null,"And the same concept applies to Operation Traits."),"\n",a.createElement(n.h2,{id:"different-styles-of-event-messages",style:{position:"relative"}},a.createElement(n.a,{href:"#different-styles-of-event-messages","aria-label":"different styles of event messages permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Different Styles of Event Messages"),"\n",a.createElement(n.h3,{id:"notification-messages",style:{position:"relative"}},a.createElement(n.a,{href:"#notification-messages","aria-label":"notification messages permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Notification Messages"),"\n",a.createElement(n.p,null,"An Event Notification ",a.createElement(n.strong,null,"contains minimal information about the event")," and enough information for interested consumers to locate additional details. The specifics of what information is included in an event notification can vary depending on the system or use case."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-json"},'{\r\n  "headers": {\r\n    "event-type": "customer-created",\r\n    "event-id": "",\r\n    "aggregate-id": "1",\r\n    "aggregate-type": "customer"\r\n  },\r\n  "payload": {\r\n    "id": 1,\r\n    "eventType": "created",\r\n    "link": "/customers/1"\r\n  }\r\n}\n')),"\n",a.createElement(n.h3,{id:"state-transfer-messages",style:{position:"relative"}},a.createElement(n.a,{href:"#state-transfer-messages","aria-label":"state transfer messages permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"State Transfer Messages"),"\n",a.createElement(n.p,null,"On the other hand a State Transfer message ",a.createElement(n.strong,null,"contains the entire state of the aggregate")," so consumer does not need to make additional calls. This can be useful in situations where subscribers need to maintain a synchronized view of the data. Compacted keyed topics typically use this style of messages."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-json"},'{\r\n  "headers": {\r\n    "event-id": "",\r\n    "aggregate-id": "1",\r\n    "aggregate-type": "customer"\r\n  },\r\n  "payload": {\r\n    "id": 1,\r\n    "firstName": "string",\r\n    "lastName": "string",\r\n    "password": "string",\r\n    "email": "string",\r\n    "username": "string",\r\n    "address": {\r\n      "id": 1,\r\n      "street": "string",\r\n      "city": "string",\r\n      "state": "string",\r\n      "zip": "string"\r\n    }\r\n  }\r\n}\n')),"\n",a.createElement(n.h3,{id:"domain-event-messages",style:{position:"relative"}},a.createElement(n.a,{href:"#domain-event-messages","aria-label":"domain event messages permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Domain Event Messages"),"\n",a.createElement(n.p,null,"Domain Event Messages ",a.createElement(n.strong,null,"contains information about the event and interesting portions of the underlying aggregate"),", but not the entire state of the aggregate. This style of events is typically used for Event Sourcing integration patterns."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-json"},'{\r\n  "headers": {\r\n    "event-type": "customer-address-updated",\r\n    "event-id": "",\r\n    "aggregate-id": "1",\r\n    "aggregate-type": "customer"\r\n  },\r\n  "payload": {\r\n    "id": 1,\r\n    "eventType": "address-updated",\r\n    "customer": {\r\n      "id": 1,\r\n      "new-address": {\r\n        "street": "string",\r\n        "city": "string",\r\n        "state": "string",\r\n        "zip": "string"\r\n      }\r\n    }\r\n  }\r\n}\n')))}var l=function(e){void 0===e&&(e={});var n=Object.assign({},(0,r.ah)(),e.components).wrapper;return n?a.createElement(n,e,a.createElement(s,e)):s(e)};function i(e){return e.children}function o(e){return a.createElement(i,e,a.createElement(l,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-post-js-content-file-path-c-users-ivan-garcia-workspace-zenwave-zen-wave-360-github-io-website-pages-posts-api-first-with-async-api-and-zen-wave-sdk-md-a665c505bc3fc554152b.js.map