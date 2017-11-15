# Business Process Manager REST APIs
REST API for Business Process Manager

- [Process API](#process-api)
  * [Retrieve Model](#retrieve-model)
  * [External Activity Model](#external-activity-model)
  * [Start Process](#start-process)
  * [Current State](#current-state)
  * [Evaluate JavaScript](#evaluate-javascript)
  * [Update Due Date](#update-due-date)
  * [Suspend Process](#suspend-process)
  * [Resume Process](#resume-process)
  * [Retry Process](#retry-process)
  * [Terminate Process](#terminate-process)
  * [Delete Process](#delete-process)
  * [Run Adhoc Event](#run-adhoc-event)
  * [Delete Token](#delete-token)
  * [Move Token](#move-token)
  * [Add Comment](#add-comment)
  * [Add Document](#add-document)
  * [Update Document](#update-document)
  * [Delete Document](#delete-document)
  * [Process Queries](#process-queries)
  * [Process Query Attributes](#process-query-attributes)
  * [Process Query Entity List](#process-query-entity-list)
  * [Process Query Entity List Count](#process-query-entity-list-count)
  * [Fire Timer](#fire-timer)
  * [Send Message](#send-message)
  * [Currently Executing](#currently-executing)
  * [Exposed Processes](#exposed-processes)
  * [Show Process Actions](#show-process-actions)
  * [Process Actions](#process-actions)
  * [Bulk Instance Details](#bulk-instance-details)
  * [AdHoc Activities](#adhoc-activities)
- [Service API](#service-api)
  * [Retrieve Model](#retrieve-model-1)
  * [Start Service](#start-service)
  * [Resume Service](#resume-service)
  * [Evaluate JavaScript](#evaluate-javascript-1)
  * [Get Data](#get-data)
  * [Set Data](#set-data)
  * [Stop Service](#stop-service)
  * [Currently Running](#currently-running)
  * [Exposed Services](#exposed-services)
- [Task API](#task-api)
  * [Task Details](#task-details)
  * [Get Data](#get-data-1)
  * [Set Data](#set-data-1)
  * [Bulk Task Details](#bulk-task-details)
  * [Start Task](#start-task)
  * [Assign Task To User](#assign-task-to-user)
  * [Assign Task To Group](#assign-task-to-group)
  * [Assign Task To Me](#assign-task-to-me)
  * [Assign Task Back](#assign-task-back)
  * [Update Due Date](#update-due-date-1)
  * [Update Priority](#update-priority)
  * [Finish Task](#finish-task)
  * [Cancel Task](#cancel-task)
  * [Task Client Settings](#task-client-settings)
  * [Task Actions](#task-actions)
  * [Task Queries](#task-queries)
  * [Task Query Attributes](#task-query-attributes)
  * [Task Query Entity List](#task-query-entity-list)
  * [Task Query Entity List Count](#task-query-entity-list-count)
  * [Invite a user for Task Collaboration](#invite-a-user-for-task-collaboration)
  * [Get Next](#get-next)
  * [Bulk Claim Tasks](#bulk-claim-tasks)
  * [Bulk Cancel Tasks](#bulk-cancel-tasks)
- [Task Template API](#task-template-api)
  * [Task Template Details](#task-template-details)
  * [Task Template Client Settings](#task-template-client-settings)
  * [Task Template Queries](#task-template-queries)
  * [Task Template Query Attributes](#task-template-query-attributes)
  * [Task Template Query Entity List](#task-template-query-entity-list)
  * [Task Template Query Entity List Count](#task-template-query-entity-list-count)
- [Activity API](#activity-api)
  * [Available Actions](#available-actions)
  * [Activity Details](#activity-details)
  * [Start Activity](#start-activity)
  * [Tasks](#tasks)
- [Search API](#search-api)
  * [Execute Query](#execute-query)
  * [Execute Performance Query](#execute-performance-query)
  * [Execute Performance Instance Query](#execute-performance-instance-query)
  * [Search Metadata](#search-metadata)
- [Business Object API](#business-object-api)
  * [Get Definition](#get-definition)
- [Organization API](#organization-api)
  * [Users](#users)
  * [User Details](#user-details)
  * [User Details by userName](#user-details-by-username)
  * [User Details by userID](#user-details-by-userid)
  * [Current User](#current-user)
  * [Set User Preference](#set-user-preference)
  * [Groups](#groups)
  * [Group Details](#group-details)
  * [Add Group Member](#add-group-member)
  * [Remove Group Member](#remove-group-member)
  * [Team Details (by Team ID)](#team-details-by-team-id)
  * [Team Details (by Team Name)](#team-details-by-team-name)
- [Process Documentation API](#process-documentation-api)
  * [Assets](#assets)
  * [Assets Comparison](#assets-comparison)
  * [Snapshots in a project](#snapshots-in-a-project)
  * [Snapshot change histories](#snapshot-change-histories)
  * [Delta changes between two snapshots](#delta-changes-between-two-snapshots)
  * [Process App Settings](#process-app-settings)
  * [Process Visual Model](#process-visual-model)
  * [Process Instances Visual Model](#process-instances-visual-model)
  * [Service Visual Model](#service-visual-model)
  * [Advanced Integration Service](#advanced-integration-service)
  * [Participant Group](#participant-group)
  * [Exposed Process Value](#exposed-process-value)
  * [Tracking Group](#tracking-group)
  * [Timing Interval](#timing-interval)
  * [Undercover Agent](#undercover-agent)
  * [Web Service](#web-service)
  * [Service Level Agreement](#service-level-agreement)
- [Other](#other)
  * [Retrieve System Details](#retrieve-system-details)
  * [Resource Environment Provider Properties](#resource-environment-provider-properties)
  * [Retrieve System Environment Variable](#retrieve-system-environment-variable)
  * [Retrieve Process Applications](#retrieve-process-applications)
  * [Retrieve Toolkits](#retrieve-toolkits)
  * [Create Process Application from BPMN Archive](#create-process-application-from-bpmn-archive)
  * [Create Toolkit from BPMN Archive](#create-toolkit-from-bpmn-archive)
  * [Exposed Scoreboards](#exposed-scoreboards)
  * [Exposed Reports](#exposed-reports)
  * [Exposed Items (All)](#exposed-items-all)
- [Social API](#social-api)
  * [Retrieve Instance Stream](#retrieve-instance-stream)
  * [Retrieve Mentions](#retrieve-mentions)
  * [Delete Mentions](#delete-mentions)
  * [Delete All Mentions](#delete-all-mentions)
  * [Retrieve All Following](#retrieve-all-following)
  * [Retrieve Following Instance](#retrieve-following-instance)
  * [Start Following Instance](#start-following-instance)
  * [Stop Following Instance](#stop-following-instance)
  * [Retrieve Task Stream](#retrieve-task-stream)
  * [Post Threaded Comment](#post-threaded-comment)
  * [Retrieve Following Task](#retrieve-following-task)
  * [Start Following Task](#start-following-task)
  * [Stop Following Task](#stop-following-task)
  * [Retrieve User''s Expert Data](#retrieve-users-expert-data)
  * [Task Experts](#task-experts)
  * [Retrieve User Avatar](#retrieve-user-avatar)
  * [Retrieve Avatar](#retrieve-avatar)
  * [Delete Avatar](#delete-avatar)
  * [Collaboration System Integration Details](#collaboration-system-integration-details)
- [Event Handling API](#event-handling-api)
  * [Send Event](#send-event)

## Process API
Process REST API
### Retrieve Model

>Retrieves the model data (BPD Model) for a particular BPD

**Path**

    /rest/bpm/wle/v1/processModel/<bpdId>?

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`header`, `dataModel`, `diagram`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|BPD ID|`bpdId`|`string`|yes|Business Process Definition ID. You can use the "v1/exposed/process" API to retrieve the list of processes (BPDs) that are available to the user.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|
|Process Application ID|`processAppId`|`string`|no|The process application ID begins with "2066.xxx". It can be found in in this tool by Other > Retrieve Process Applications.|

---

### External Activity Model

>Retrieves the model data for an external activity

**Path**

    /rest/bpm/wle/v1/externalactivity/<externalActivityId>/model

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`dataModel`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|External Activity ID|`externalActivityId`|`string`|yes|ID of the external activity|
|authoring|`authoring`|`boolean`|no|Select if retrieving the model for process documentation.  The Snapshot ID or Branch ID option must be set when authoring is enabled.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Process Application ID|`processAppId`|`string`|no|The process application ID begins with "2066.xxx". It can be found in in this tool by Other > Retrieve Process Applications.|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Start Process

>Starts a new BPD instance

**Path**

    /rest/bpm/wle/v1/process?action=start

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|BPD ID|`bpdId`|`string`|yes|Business Process Definition ID. You can use the "v1/exposed/process" API to retrieve the list of processes (BPDs) that are available to the user.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|
|Process Application ID|`processAppId`|`string`|no|The process application ID begins with "2066.xxx". It can be found in in this tool by Other > Retrieve Process Applications.|
|Parameters|`params`|`string`|no|A string containing a JSON expression that contains one or more input parameter settings. Each of the variables will be set in the context of the running process. Example: ....params={"orderNumber":"5","customerName":{"firstName":"John","lastName":"Doe"}}|

---

### Current State

>Returns the current state of a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|
|Task Limit|`taskLimit`|`string`|no|The maximum number of tasks to be returned.|
|Task Offset|`taskOffset`|`string`|no|Specifies the index (origin 0) of the first task instance to be returned from the result set.|

---

### Evaluate JavaScript

>Evaluates a JavaScript expression

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=js

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|
|JavaScript Expression|`script`|`string`|yes|The JavaScript expression to evaluate|

---

### Update Due Date

>Sets a new due date on a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=update

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|
|Due Date|`dueDate`|`string`|yes|Due date in ISO-8601 format (e.g. 2011-01-05T03:15:30.000-00:00)|

---

### Suspend Process

>Pauses a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=suspend

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|

---

### Resume Process

>Resumes a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=resume

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|

---

### Retry Process

>Retries a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=retry

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|

---

### Terminate Process

>Terminates a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=terminate

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|

---

### Delete Process

>Deletes a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=delete

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`DELETE`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|

---

### Run Adhoc Event

>Runs an adhoc event in the BPD instance. The available adhoc steps are available from the BPD model.

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=adhoc

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|
|Step|`step`|`string`|yes|Step|

---

### Delete Token

>Delete a token from a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=deleteToken&tokenId=<tokenId>&resume=<resume>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|
|Token ID|`tokenId`|`string`|yes|The token ID|
|Resume|`resume`|`boolean`|no|Resumes a BPD instance|

---

### Move Token

>Move a token to a new activity

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=moveToken&tokenId=<tokenId>&target=<target>&resume=<resume>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|
|Token ID|`tokenId`|`string`|yes|The token ID|
|Target|`target`|`string`|yes|The target step ID|
|Resume|`resume`|`boolean`|no|Resumes a BPD instance|

---

### Add Comment

>Adds a comment to a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=comment

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|
|Comment|`comment`|`string`|yes|The comment message|
|Original Comment Id|`origCommentId`|`string`|no|The original comment Id, for threaded comments|

---

### Add Document

>Adds a document to a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=addDocument

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|
|Name|`name`|`string`|yes|Name of the document|
|Type|`docType`|`extended_option_selector`|yes|Type of document|

---

### Update Document

>Updates a document associated with a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=updateDocument

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`, `PUT`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|
|Document ID|`docId`|`string`|yes|ID of the document|
|Type|`docType`|`extended_option_selector`|yes|Type of document|

---

### Delete Document

>Deletes a document from a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=deleteDocument

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`, `DELETE`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|
|Document ID|`docId`|`string`|yes|ID of the document|

---

### Process Queries

>Retrieves a list of queries for BPD instance data.

**Path**

    /rest/bpm/wle/v1/processes/queries

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Kind|`kind`|`list`<ul><li>``</li><li>`SAVED_SEARCH`</li></ul>|no|The kind attribute for the queries, used to filter|
|Content|`content`|`string`|no|Specifies a comma-separated list of content values. When using this parameter, only queries which return the specified content values in their result set are returned. For example, if you specified content=TASK.PRIORITY,TASK.TKIID in your request URI query string, then the response will include only those queries that return both content types|
|includeTaskData|`includeTaskData`|`string`|no|A string indicating if the response should include task information data. Valid values are: 'TRUE' and 'FALSE'. The default value is 'FALSE'|

---

### Process Query Attributes

>Retrieves a list of attributes of a query for BPD instance data.

**Path**

    /rest/bpm/wle/v1/processes/query/<queryName>/attributes

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|includeTaskData|`includeTaskData`|`string`|no|A string indicating if the response should include task information data. Valid values are: 'TRUE' and 'FALSE'. The default value is 'FALSE'|

---

### Process Query Entity List

>Retrieves a list of BPD instance entities obtained via a query.

**Path**

    /rest/bpm/wle/v1/processes/query/<queryName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Selected Attributes|`selectedAttributes`|`string`|no|Comma-separated list of attributes, in upper case letters, which specifies the attributes that are retrieved by the query. If no selected attributes are specified, all of the attributes that are defined on the query are returned.|
|Interaction Filter|`interactionFilter`|`list`<ul><li>``</li><li>`ADMINISTER`</li><li>`BROWSE_ALL`</li></ul>|no|Name of a predefined user interaction.|
|Query Filter|`queryFilter`|`string`|no|A query table condition language expression that performs additional filtering on the result set. All attributes defined on the query can be referenced.|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Sort Attributes|`sortAttributes`|`string`|no|Comma-separated list of sort criteria applied to the list of returned process instance entities. Each list entry has the form attribute [ASC|DESC] where ascending is the default.|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If not specified, then the default size defined for the query will be used.|
|includeTaskData|`includeTaskData`|`string`|no|A string indicating if the response should include task information data. Valid values are: 'TRUE' and 'FALSE'. The default value is 'FALSE'|
|filterByCurrentUser|`filterByCurrentUser`|`string`|no|This parameter is used only when the request is being executed by an administrative user, otherwise it is ignored. This parameter is a flag which indicates whether or not the search results should be restricted to those entities associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, then the default is to perform a filtered search. If the current user is not an administrative user, then this parameter is ignored and a filtered search is performed|

---

### Process Query Entity List Count

>Retrieves the number of BPD instance entities in a query meeting specified criteria.

**Path**

    /rest/bpm/wle/v1/processes/query/<queryName>/count

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Query Filter|`queryFilter`|`string`|no|A query table condition language expression that performs additional filtering on the result set. All attributes defined on the query can be referenced.|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If not specified, then the default size defined for the query will be used.|
|filterByCurrentUser|`filterByCurrentUser`|`string`|no|This parameter is used only when the request is being executed by an administrative user, otherwise it is ignored. This parameter is a flag which indicates whether or not the search results should be restricted to those entities associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, then the default is to perform a filtered search. If the current user is not an administrative user, then this parameter is ignored and a filtered search is performed|

---

### Fire Timer

>Allows the current user to manually fire an inline or attached timer

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=fireTimer

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|
|Timer Token ID|`timerTokenId`|`string`|yes|Token ID of the timer. A token can be found through ->Task API ->Task Details.|

---

### Send Message

>Allows the current user to target an event message to the given process instance

**Path**

    /rest/bpm/wle/v1/process?action=sendMessage

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Message|`message`|`text`|yes|Message to be sent|

---

### Currently Executing

>Lists all processes that are currently executing

**Path**

    /rest/bpm/wle/v1/process/currentlyExecuting

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Exposed Processes

>Retrieves exposed processes

**Path**

    /rest/bpm/wle/v1/exposed/process

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Show Process Actions

>Retrieves a list of actions (both adhoc and standard) that are available to the current user for the specified process instance.

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/actions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|

---

### Process Actions

>Retrieves a list of actions that can be performed on process instances.

**Path**

    /rest/bpm/wle/v1/process/actions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance IDs|`instanceIds`|`string`|yes|A comma-separated list of instance IDs or process IDs, also known as a piids. Can be found through Task API > Task Details.|
|Actions|`actions`|`string`|no|A comma-separated list of actions|

---

### Bulk Instance Details

>Retrieves the details for a set of instances

**Path**

    /rest/bpm/wle/v1/process?action=getdetails

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance IDs|`instanceIds`|`string`|yes|A comma-separated list of instance IDs or process IDs, also known as a piids. Can be found through Task API > Task Details.|

---

### AdHoc Activities

>Returns a list of ad hoc activities.

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/adHocActivities

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|

---

## Service API
Service REST API
### Retrieve Model

>Retrieves the model data (service model) for a particular service.

**Path**

    /rest/bpm/wle/v1/serviceModel/<serviceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`header`, `dataModel`, `diagram`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service ID or Name|`serviceId`|`string`|yes|A service model ID or a string of the form: <project-shortname>@<service-name>|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Process Application ID|`processAppId`|`string`|no|The process application ID begins with "2066.xxx". It can be found in in this tool by Other > Retrieve Process Applications.|

---

### Start Service

>Runs a service until a natural stop (either a Coach, Postpone or the end).

**Path**

    /rest/bpm/wle/v1/service/<serviceId>?action=start

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service ID or Name|`serviceId`|`string`|yes|A service model ID or a string of the form: <project-shortname>@<service-name>|
|Parameters|`params`|`string`|no|A string containing a JSON expression that contains one or more input parameter settings. Each of the variables will be set in the context of the running process. Example: ....params={"orderNumber":"5","customerName":{"firstName":"John","lastName":"Doe"}}|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Create Task|`createTask`|`boolean`|no|Indicates whether or not a corresponding task should be created when starting the service.|
|Caller Task Id|`callerTaskId`|`string`|no|The task id of the task that is associated with starting this service.|

---

### Resume Service

>Resumes a running service or task until a natural stop (either a Coach, postpone or the end)

**Path**

    /rest/bpm/wle/v1/service/<instanceId>?action=<action>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service Instance ID|`instanceId`|`string`|yes|The service instance ID, which is the value that is returned as the "key" element within the ServiceRunModel response when starting a service|
|Button or Endpoint|`action`|`string`|yes|Represents buttons or endPoints on a coach|

---

### Evaluate JavaScript

>Evaluates a javascript expression against a currently running service

**Path**

    /rest/bpm/wle/v1/service/<instanceId>?action=js

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service Instance ID|`instanceId`|`string`|yes|The service instance ID, which is the value that is returned as the "key" element within the ServiceRunModel response when starting a service|
|JavaScript Expression|`script`|`string`|yes|The JavaScript expression to evaluate|

---

### Get Data

>Retrieves a value from a field

**Path**

    /rest/bpm/wle/v1/service/<instanceId>?action=getData

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service Instance ID or Task ID|`instanceId`|`string`|yes|Either a service instance id (a string of the form @<nnnn>, where <nnnn> is a string of digits) or a task instance id (a string of digits).   The service instance id can be obtained from the "key" field that is returned in the response of ->Service API->Start Service. The task instance id can be obtained from the "task.tkiid" fields that are returned in the response of ->Process API->Current State|
|Fields|`fields`|`string`|yes|A comma-separated list of fields|

---

### Set Data

>Sets a value to a field

**Path**

    /rest/bpm/wle/v1/service/<instanceId>?action=setData

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service Instance ID or Task ID|`instanceId`|`string`|yes|Either a service instance id (a string of the form @<nnnn>, where <nnnn> is a string of digits) or a task instance id (a string of digits).   The service instance id can be obtained from the "key" field that is returned in the response of ->Service API->Start Service. The task instance id can be obtained from the "task.tkiid" fields that are returned in the response of ->Process API->Current State|
|Parameters|`params`|`string`|yes|A string containing a JSON expression that contains one or more input parameter settings. Each of the variables will be set in the context of the running process. Example: ....params={"orderNumber":"5","customerName":{"firstName":"John","lastName":"Doe"}}|

---

### Stop Service

>Stops a service

**Path**

    /rest/bpm/wle/v1/service/<instanceId>?action=stop

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service Instance ID|`instanceId`|`string`|yes|The service instance ID, which is the value that is returned as the "key" element within the ServiceRunModel response when starting a service|

---

### Currently Running

>Lists all services for this user that are currently running

**Path**

    /rest/bpm/wle/v1/service/currentlyRunning

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Exposed Services

>Retrieves exposed services

**Path**

    /rest/bpm/wle/v1/exposed/service

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Include Service Subtypes|`includeServiceSubtypes`|`string`|no|A comma-separated list of one or more service subtypes to be included in the result set. If not specified, then all service subtypes will be included.|

---

## Task API
Task REST API
### Task Details

>Retrieves the details of a task

**Path**

    /rest/bpm/wle/v1/task/<taskId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|

---

### Get Data

>Retrieves a value from a field

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=getData

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|Fields|`fields`|`string`|yes|A comma-separated list of fields|

---

### Set Data

>Sets a value to a field

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=setData

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|Parameters|`params`|`string`|yes|A string containing a JSON expression that contains one or more input parameter settings. Each of the variables will be set in the context of the running process. Example: ....params={"orderNumber":"5","customerName":{"firstName":"John","lastName":"Doe"}}|

---

### Bulk Task Details

>Retrieves the details for a set of tasks

**Path**

    /rest/bpm/wle/v1/task?action=getdetails

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task IDs|`taskIDs`|`string`|yes|A comma-separated list of task IDs|

---

### Start Task

>Starts a task

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=start

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|

---

### Assign Task To User

>Assigns a task to a user

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=assign

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|To User|`toUser`|`string`|yes|Assign to a particular user|

---

### Assign Task To Group

>Assigns a task to a group

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=assign

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|To Group|`toGroup`|`string`|yes|Assign to a particular group|

---

### Assign Task To Me

>Assigns a task to the current user

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=assign&toMe=true

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|

---

### Assign Task Back

>Assigns a task to the original owner

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=assign&back=true

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|

---

### Update Due Date

>Sets a new due date on a task

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=update

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|Due Date|`dueDate`|`string`|yes|Due date in ISO-8601 format (e.g. 2011-01-05T03:15:30.000-00:00)|

---

### Update Priority

>Sets a new priority on a task

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=update

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|Priority|`priority`|`string`|yes|Priority value e.g. Highest/10, High/20, Normal/30, Low/40 or Lowest/50|

---

### Finish Task

>Closes a task

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=finish

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|Parameters|`params`|`string`|no|Parameters to finish the task/activity|

---

### Cancel Task

>Cancels a task

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=cancel

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|

---

### Task Client Settings

>Retrieves client settings for a specific task instance.

**Path**

    /rest/bpm/wle/v1/task/<taskId>/clientSettings/<type>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|Type|`type`|`string`|yes|Client type - the only predefined value is "IBM_WLE_Coach"|

---

### Task Actions

>Retrieves a list of actions that can be performed on task instances.

**Path**

    /rest/bpm/wle/v1/task/actions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task IDs|`taskIDs`|`string`|yes|A comma-separated list of task IDs|
|Actions|`actions`|`string`|no|A comma-separated list of actions the caller is interested in, used as a filter for the response. If not specified then information about all possible actions is returned.|

---

### Task Queries

>Retrieves a list of queries for task instance data.

**Path**

    /rest/bpm/wle/v1/tasks/queries

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Kind|`kind`|`list`<ul><li>``</li><li>`SAVED_SEARCH`</li></ul>|no|The kind attribute for the queries, used to filter|
|Content|`content`|`string`|no|Specifies a comma-separated list of content values. When using this parameter, only queries which return the specified content values in their result set are returned. For example, if you specified content=TASK.PRIORITY,TASK.TKIID in your request URI query string, then the response will include only those queries that return both content types|

---

### Task Query Attributes

>Retrieves a list of attributes of a query for task instance data.

**Path**

    /rest/bpm/wle/v1/tasks/query/<queryName>/attributes

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|

---

### Task Query Entity List

>Retrieves a list of task instance entities obtained via a query.

**Path**

    /rest/bpm/wle/v1/tasks/query/<queryName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Selected Attributes|`selectedAttributes`|`string`|no|Comma-separated list of attributes, in upper case letters, which specifies the attributes that are retrieved by the query. If no selected attributes are specified, all of the attributes that are defined on the query are returned.|
|Interaction Filter|`interactionFilter`|`list`<ul><li>``</li><li>`WORK_ON`</li><li>`WORK_ON_ACTIVE`</li><li>`ASSESS_AVAILABLE`</li><li>`ASSESS_AND_WORK_ON`</li><li>`CHECK_COMPLETED`</li><li>`ADMINISTER`</li><li>`BROWSE_ALL`</li></ul>|no|Name of a predefined user interaction.|
|Query Filter|`queryFilter`|`string`|no|A query table condition language expression that performs additional filtering on the result set. All attributes defined on the query can be referenced.|
|Search Filter|`searchFilter`|`string`|no|A search expression used as input to the task search engine.|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Sort Attributes|`sortAttributes`|`string`|no|Comma-separated list of sort criteria applied to the list of returned process instance entities. Each list entry has the form attribute [ASC|DESC] where ascending is the default.|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If not specified, then the default size defined for the query will be used.|
|filterByCurrentUser|`filterByCurrentUser`|`string`|no|This parameter is used only when the request is being executed by an administrative user, otherwise it is ignored. This parameter is a flag which indicates whether or not the search results should be restricted to those entities associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, then the default is to perform a filtered search. If the current user is not an administrative user, then this parameter is ignored and a filtered search is performed|

---

### Task Query Entity List Count

>Retrieves the number of task instance entities in a query meeting specified criteria.

**Path**

    /rest/bpm/wle/v1/tasks/query/<queryName>/count

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Interaction Filter|`interactionFilter`|`list`<ul><li>``</li><li>`WORK_ON`</li><li>`WORK_ON_ACTIVE`</li><li>`ASSESS_AVAILABLE`</li><li>`ASSESS_AND_WORK_ON`</li><li>`CHECK_COMPLETED`</li><li>`BROWSE_ALL`</li></ul>|no|Name of a predefined user interaction.|
|Query Filter|`filter`|`string`|no|A query table condition language expression that performs additional filtering on the result set. All attributes defined on the query can be referenced.|
|Search Filter|`searchFilter`|`string`|no|A search expression used as input to the task search engine.|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If not specified, then the default size defined for the query will be used.|
|filterByCurrentUser|`filterByCurrentUser`|`string`|no|This parameter is used only when the request is being executed by an administrative user, otherwise it is ignored. This parameter is a flag which indicates whether or not the search results should be restricted to those entities associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, then the default is to perform a filtered search. If the current user is not an administrative user, then this parameter is ignored and a filtered search is performed|

---

### Invite a user for Task Collaboration

>Invite a user to collaborate on a task.

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=invite&user=<user>&message=<message>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|User|`user`|`string`|yes|Represents the user to be invited for Task Collaboration|
|Message|`message`|`string`|no|Message to be sent|

---

### Get Next

>Claim the next task, selected based on filter criteria

**Path**

    /rest/bpm/wle/v1/task?action=getNext&query=<queryName>&queryFilter=<queryFilter>&sortAttributes=<sortAttributes>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Query Filter|`queryFilter`|`string`|no|A query table condition language expression that performs additional filtering on the result set. All attributes defined on the query can be referenced.|
|Sort Attributes|`sortAttributes`|`string`|no|Comma-separated list of sort criteria applied to the list of returned process instance entities. Each list entry has the form attribute [ASC|DESC] where ascending is the default.|

---

### Bulk Claim Tasks

>Claim responsibility for multiple task instances

**Path**

    /rest/bpm/wle/v1/task?action=claim

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task IDs|`taskIDs`|`string`|yes|A comma-separated list of task IDs|

---

### Bulk Cancel Tasks

>Release multiple claimed task instances

**Path**

    /rest/bpm/wle/v1/task?action=cancel

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task IDs|`taskIDs`|`string`|yes|A comma-separated list of task IDs|

---

## Task Template API
Task Template REST API Calls
### Task Template Details

>Retrieves the details of a task template

**Path**

    /rest/bpm/wle/v1/taskTemplate/<templateId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task Template ID|`templateId`|`string`|yes|ID of the task template|

---

### Task Template Client Settings

>Retrieves client settings for a specific task template.

**Path**

    /rest/bpm/wle/v1/taskTemplate/<templateId>/clientSettings/<type>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task Template ID|`templateId`|`string`|yes|ID of the task template|
|Type|`type`|`string`|yes|Client type - the only predefined value is "IBM_WLE_Coach"|

---

### Task Template Queries

>Retrieves a list of queries for task template data.

**Path**

    /rest/bpm/wle/v1/taskTemplates/queries

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Kind|`kind`|`list`<ul><li>``</li><li>`SAVED_SEARCH`</li></ul>|no|The kind attribute for the queries, used to filter|
|Content|`content`|`string`|no|Specifies a comma-separated list of content values. When using this parameter, only queries which return the specified content values in their result set are returned. For example, if you specified content=TASK.PRIORITY,TASK.TKIID in your request URI query string, then the response will include only those queries that return both content types|

---

### Task Template Query Attributes

>Retrieves a list of attributes of a query for task template data.

**Path**

    /rest/bpm/wle/v1/taskTemplates/query/<queryName>/attributes

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|

---

### Task Template Query Entity List

>Retrieves a list of task template entities obtained via a query.

**Path**

    /rest/bpm/wle/v1/taskTemplates/query/<queryName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Selected Attributes|`selectedAttributes`|`string`|no|Comma-separated list of attributes, in upper case letters, which specifies the attributes that are retrieved by the query. If no selected attributes are specified, all of the attributes that are defined on the query are returned.|
|Interaction Filter|`interactionFilter`|`list`<ul><li>``</li><li>`CREATE`</li></ul>|no|Name of a predefined user interaction.|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Sort Attributes|`sortAttributes`|`string`|no|Comma-separated list of sort criteria applied to the list of returned process instance entities. Each list entry has the form attribute [ASC|DESC] where ascending is the default.|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If not specified, then the default size defined for the query will be used.|

---

### Task Template Query Entity List Count

>Retrieves the number of task template entities in a query meeting specified criteria.

**Path**

    /rest/bpm/wle/v1/taskTemplates/query/<queryName>/count

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Interaction Filter|`interactionFilter`|`list`<ul><li>``</li><li>`CREATE`</li></ul>|no|Name of a predefined user interaction.|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If not specified, then the default size defined for the query will be used.|

---

## Activity API
Activity related REST API calls.
### Available Actions

>Retrieve available actions for the user making the request and given activity instance id.

**Path**

    /rest/bpm/wle/v1/activity/<instanceId>/availableActions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Activity instance ID|`instanceId`|`string`|yes|The instance ID of the activity, also known as aiid.|

---

### Activity Details

>Retrieve details for given activity instance id.

**Path**

    /rest/bpm/wle/v1/activity/<instanceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Activity instance ID|`instanceId`|`string`|yes|The instance ID of the activity, also known as aiid.|

---

### Start Activity

>Starts a manual activity.

**Path**

    /rest/bpm/wle/v1/activity/<instanceId>?action=ACTION_START_ACTIVITY

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Activity instance ID|`instanceId`|`string`|yes|The instance ID of the activity, also known as aiid.|

---

### Tasks

>A list of current tasks.

**Path**

    /rest/bpm/wle/v1/activity/<instanceId>/tasks

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Activity instance ID|`instanceId`|`string`|yes|The instance ID of the activity, also known as aiid.|

---

## Search API
Search REST API
### Execute Query

>Performs a custom search

**Path**

    /rest/bpm/wle/v1/search/query

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Columns|`columns`|`string`|no|A comma-separated list of column names that should be returned by the search. Valid column names are: "taskId", "instanceId", "bpdName", "taskSubject", "taskArrived", "taskStarted", "taskFinished", plus any columns associated with tracked business data. If this parameter is not specified, then the following columns are returned by default: "taskId", "instanceId", "bpdName" and "taskSubject".|
|Condition|`condition`|`string`|no|Query condition: "<field>|<value>" or "<field>|<op>|<value>"|
|Sort|`sort`|`string`|no|Name of primary sort column|
|Second Sort|`secondSort`|`string`|no|Name of secondary sort column|
|Organization|`organization`|`list`<ul><li>`byInstance`</li><li>`byTask`</li></ul>|no|A string indicating how the results should be organized. Valid values are: 'byTask' and 'byInstance'. The default value is 'byInstance'.|
|Size|`size`|`integer`|no|Specifies the maximum number of entities to be returned. If not specified, then the default size defined for the query will be used.|
|Offset|`offset`|`integer`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used|
|Save as Name|`saveAsName`|`string`|no|Save this custom query as a saved search for this user|
|Perform the query|`run`|`boolean`|no|A flag which indicates whether or not to perform the query.  If not specified, the default value of true is used.|
|Share the query with other users|`shared`|`boolean`|no|A flag which indicates whether or not to share the query with other users.  If not specified, the default value of false is used.|
|filterByCurrentUser|`filterByCurrentUser`|`boolean`|no|This parameter is used only when the request is being executed by an administrative user, otherwise it is ignored. This parameter is a flag which indicates whether or not the search results should be restricted to those entities associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, then the default is to perform a filtered search. If the current user is not an administrative user, then this parameter is ignored and a filtered search is performed|

---

### Execute Performance Query

>Performs a custom query against the performance server

**Path**

    /rest/bpm/wle/v1/performance/query

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Filter|`filter`|`string`|yes|A string representing a filter to be used with the search.|
|Columns|`columns`|`string`|no|A comma-separated list of column names that should be returned by the search. Valid column names are: "taskId", "instanceId", "bpdName", "taskSubject", "taskArrived", "taskStarted", "taskFinished", plus any columns associated with tracked business data. If this parameter is not specified, then the following columns are returned by default: "taskId", "instanceId", "bpdName" and "taskSubject".|
|Sort|`sort`|`string`|no|Name of primary sort column|
|Second Sort|`secondSearch`|`string`|no|Name of secondary sort column|
|Condition|`condition`|`string`|no|Query condition: "<field>|<value>" or "<field>|<op>|<value>"|
|Only Rollups|`onlyRollups`|`boolean`|no|Return only summarized data (true/false)|
|Rollup Rule|`rollupRule`|`string`|no|Formula to use for summarizing the data (AVG, SUM, MIN, MAX, COUNT)|

---

### Execute Performance Instance Query

>Retrieves the history information (tracked business and process data) for a BPD instance

**Path**

    /rest/bpm/wle/v1/performance/instance/<instanceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|The Process ID, also known as a piid, can be found through Task API > Task Details|

---

### Search Metadata

>undefined

**Path**

    /rest/bpm/wle/v1/search/meta/<type>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Type|`type`|`list`<ul><li>`column`</li><li>`constraintColumn`</li><li>`taskStatus`</li><li>`businessData`</li><li>`savedSearch`</li><li>`instanceStatus`</li><li>`priority`</li></ul>|yes|The type of metadata to be returned|

---

## Business Object API
Business Object API
### Get Definition

>Retrieve the Definition of Business Object

**Path**

    /rest/bpm/wle/v1/businessobject/<boId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Business Object ID|`boId`|`string`|yes|The Business Object ID|
|Snapshot ID|`snapshotId`|`string`|yes|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

## Organization API
REST API pertaining to users and groups.
### Users

>Returns a list of users

**Path**

    /rest/bpm/wle/v1/users

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`memberships`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Name Filter|`filter`|`string`|no|An optional simple regular expression to be used to filter the list of groups returned. Example: "tw_*" will return all groups whose names begin with "tw_".|
|Maximum Results|`maxresult`|`string`|no|The maximum number of users to return (optional)|
|Reassign Task ID|`assignTaskidFilter`|`string`|no|Only include users able to be assigned this task (optional)|
|Collaboration Task ID|`collabTaskidFilter`|`string`|no|Only include users able to collaborate on this task (optional)|
|Include Experts|`includeTaskExperts`|`boolean`|no|Include experts in list of users able to collaborate (optional)|
|Sort|`sort`|`boolean`|no|Sort the list by name (optional)|
|Include Internal Memberships|`includeInternalMemberships`|`boolean`|no|Includes internal memberships when membership information is returned|
|Refresh User|`refreshUser`|`boolean`|no|Refreshes fullname and group memberships of users for member of the group that are referred by the policyAction "ACTION_REFRESH_USER."|

---

### User Details

>Returns information about a single user

**Path**

    /rest/bpm/wle/v1/user/<user>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`memberships`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|User Name|`user`|`string`|yes|Name of the user|
|Include Internal Memberships|`includeInternalMemberships`|`boolean`|no|Includes internal memberships when membership information is returned|
|Refresh User|`refreshUser`|`boolean`|no|Refreshes fullname and group memberships of users for member of the group that are referred by the policyAction "ACTION_REFRESH_USER."|

---

### User Details by userName

>Returns information about a single user

**Path**

    /rest/bpm/wle/v1/user

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`memberships`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|User Name|`userName`|`string`|yes|Name of the user|
|Include Internal Memberships|`includeInternalMemberships`|`boolean`|no|Includes internal memberships when membership information is returned|
|Refresh User|`refreshUser`|`boolean`|no|Refreshes fullname and group memberships of users for member of the group that are referred by the policyAction "ACTION_REFRESH_USER."|

---

### User Details by userID

>Returns information about a single user

**Path**

    /rest/bpm/wle/v1/user

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`memberships`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|User ID|`userID`|`string`|yes|ID of the user|
|Include Internal Memberships|`includeInternalMemberships`|`boolean`|no|Includes internal memberships when membership information is returned|
|Refresh User|`refreshUser`|`boolean`|no|Refreshes fullname and group memberships of users for member of the group that are referred by the policyAction "ACTION_REFRESH_USER."|

---

### Current User

>Returns information about the current logged-in user

**Path**

    /rest/bpm/wle/v1/user/current

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`memberships`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Include Internal Memberships|`includeInternalMemberships`|`boolean`|no|Includes internal memberships when membership information is returned|

---

### Set User Preference

>Sets a user preference value

**Path**

    /rest/bpm/wle/v1/user/<user>?action=setPreference

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|User Name|`user`|`string`|yes|Name of the user|
|Preference Key|`key`|`string`|yes|A string which indicates the user preference to be set. In addition to email, notification, locale, fallback, assignandrun, other custom user attribute names may also be specified, provided that they have been defined in Process Designer|
|Preference Value|`value`|`string`|no|The new value of the user preference|

---

### Groups

>Returns a list of groups

**Path**

    /rest/bpm/wle/v1/groups

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`members`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Name Filter|`filter`|`string`|no|An optional simple regular expression to be used to filter the list of groups returned. Example: "tw_*" will return all groups whose names begin with "tw_".|

---

### Group Details

>Returns information about a single group

**Path**

    /rest/bpm/wle/v1/group/<group>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`members`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Group Name|`group`|`string`|yes|Name of the group|

---

### Add Group Member

>Add a member to a group

**Path**

    /rest/bpm/wle/v1/group/<groupPathParameter>?action=addMember

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|no|no|`members`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Group Name|`groupPathParameter`|`string`|yes|Name of the group|
|User|`user`|`string`|no|User name or ID to be added or removed from the group|
|Group|`group`|`string`|no|Group name or ID to be added or removed from the group|

---

### Remove Group Member

>Remove a member from a group

**Path**

    /rest/bpm/wle/v1/group/<groupPathParameter>?action=removeMember

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|no|no|`members`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Group Name|`groupPathParameter`|`string`|yes|Name of the group|
|User|`user`|`string`|no|User name or ID to be added or removed from the group|
|Group|`group`|`string`|no|Group name or ID to be added or removed from the group|

---

### Team Details (by Team ID)

>Returns information about a single team, which is identified by its ID.

**Path**

    /rest/bpm/wle/v1/team/<teamId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Team ID|`teamId`|`string`|yes|The ID of the team.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Team Details (by Team Name)

>Returns information about a single team, which is identified by its name.

**Path**

    /rest/bpm/wle/v1/team

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Team Name|`name`|`string`|yes|The name of the team.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

## Process Documentation API
Process Documentation REST API
### Assets

>Returns a list of assets

**Path**

    /rest/bpm/wle/v1/assets

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Assets Comparison

>Returns a list of assets with comparison information

**Path**

    /rest/bpm/wle/v1/assets/compare

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Source Snapshot ID|`srcSnapshotId`|`string`|yes|The Snapshot ID of the comparison source|
|Target Branch ID|`destBranchId`|`string`|yes|The Branch ID or the comparison target|

---

### Snapshots in a project

>Return a list of snapshots in a project

**Path**

    /rest/bpm/wle/v1/project/<projectId>/snapshots

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Project ID|`projectId`|`string`|yes|The Project ID is the same as the process application ID. It begins with "2066.xxx" and can be found in in this tool by Other > Retrieve Process Applications.|

---

### Snapshot change histories

>Return a list of change histories for a snapshot

**Path**

    /rest/bpm/wle/v1/snapshot/<snapshotId>/changehistory

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Snapshot ID|`snapshotId`|`string`|yes|Snapshot ID for a particular process. Begins with "2064.xxx...."|

---

### Delta changes between two snapshots

>Return a list of the delta changes between two snapshots

**Path**

    /rest/bpm/wle/v1/snapshot/comparehistory

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Snapshot ID (1)|`snapshotId1`|`string`|yes|The Snapshot ID (1). Starts with "2064.xxx...."|
|Branch ID (1)|`branchId1`|`string`|no|The Branch ID (1). Starts with "2063.xxx....". It is required when snapshotId1 is "tip".|
|Snapshot ID (2)|`snapshotId2`|`string`|yes|The Snapshot ID (2). Starts with "2064.xxx...."|
|Branch ID (2)|`branchId2`|`string`|no|The Branch ID (2). Starts with "2063.xxx....". It is required when snapshotId2 is "tip".|

---

### Process App Settings

>Retrieve Process App Settings

**Path**

    /rest/bpm/wle/v1/processAppSettings

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|
|Recurse Dependencies|`recurse`|`boolean`|no|Whether to recursively display process app dependencies|

---

### Process Visual Model

>Retrieve Process Visual Model for a BPD

**Path**

    /rest/bpm/wle/v1/visual/processModel/<bpdId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|BPD ID|`bpdId`|`string`|yes|Business Process Definition ID. You can use the "v1/exposed/process" API to retrieve the list of processes (BPDs) that are available to the user.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Process Instances Visual Model

>Retrieve Process Visual Model for BPD instances

**Path**

    /rest/bpm/wle/v1/visual/processModel/instances

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|BPD Instance IDs|`instanceIds`|`string`|yes|The array of BPD Instance IDs, such as [3,4]|
|BPD ID|`bpdId`|`string`|no|Business Process Definition ID. You can use the "v1/exposed/process" API to retrieve the list of processes (BPDs) that are available to the user.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Service Visual Model

>Retrieve Service Visual Model

**Path**

    /rest/bpm/wle/v1/visual/serviceModel/<serviceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service ID|`serviceId`|`string`|yes|The service ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Advanced Integration Service

>Retrieve service model of the Advanced Integration Service

**Path**

    /rest/bpm/wle/v1/SCAServiceModel/<serviceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service ID|`serviceId`|`string`|yes|The service ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Participant Group

>Retrieve the details of Participant Group

**Path**

    /rest/bpm/wle/v1/participantGroup/<participantGroupId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Participant Group ID|`participantGroupId`|`string`|yes|The Participant Group ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Exposed Process Value

>Retrieve the details of Exposed Process Value

**Path**

    /rest/bpm/wle/v1/epv/<epvId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Exposed Process Value ID|`epvId`|`string`|yes|The Exposed Process Value ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Tracking Group

>Retrieve the details of Tracking Group

**Path**

    /rest/bpm/wle/v1/trackinggroup/<tgId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Tracking Group ID|`tgId`|`string`|yes|The Tracking Group ID, or tgId, can be obtained from the response of Process Documentation API > Assets.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Timing Interval

>Retrieve the details of Timing Interval

**Path**

    /rest/bpm/wle/v1/timinginterval/<timingIntervalId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Timing Interval ID|`timingIntervalId`|`string`|yes|The timing interval ID. This is a unique value that is system generated for each type of Timing Interval. See the TIMINGINTERVALS view in BPD for a mapping from a name to the TIMING_INTERVAL_ID value.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Undercover Agent

>Retrieve the details of Undercover Agent

**Path**

    /rest/bpm/wle/v1/uca/<ucaId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Undercover Agent ID|`ucaId`|`string`|yes|The Undercover Agent ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Web Service

>Retrieve the details of Web Service

**Path**

    /rest/bpm/wle/v1/webservice/<wsId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Web Service ID or Name|`wsId`|`string`|yes|The Web Service ID or name. A Web Service ID starts with "7." followed by a much longer string of characters. (i.e. 7.82145699-78e7-43d0-9cae-2bb0c715b8c7)|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Service Level Agreement

>Retrieve the details of Service Level Agreement

**Path**

    /rest/bpm/wle/v1/sla/<slaId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service Level Agreement ID|`slaId`|`string`|yes|The Service Level Agreement ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

## Other
Other REST API Calls
### Retrieve System Details

>Retrieves system details

**Path**

    /rest/bpm/wle/v1/systems

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Resource Environment Provider Properties

>Retrieves properties from a specified Resource Environment Provider

**Path**

    /rest/bpm/wle/v1/system/rep/<providerName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Resource Environment Provider Name|`providerName`|`string`|no|The name of the resource Environment provider|
|Resource Environment Provider Properties|`properties`|`string`|no|JSON Array of property names|

---

### Retrieve System Environment Variable

>Retrieves system environment variable

**Path**

    /rest/bpm/wle/v1/system/env/variable

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|BPD Shortname|`bpdShortname`|`string`|yes|The BPD project short name. Can be found through Other > Retrieve Process Applications.|
|variable name|`name`|`string`|yes|variable name|

---

### Retrieve Process Applications

>Retrieves the process applications

**Path**

    /rest/bpm/wle/v1/processApps

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Retrieve Toolkits

>Retrieves the toolkits

**Path**

    /rest/bpm/wle/v1/toolkit

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Create Process Application from BPMN Archive

>Creates a process application from a BPMN 2.0 archive

**Path**

    /rest/bpm/wle/v1/processApps

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Generate Advanced Integration Services|`genAIS`|`boolean`|no|Create Advanced Integration Services for unimplemented services|
|Document File|`data`|`file`|yes|File path of the document|

---

### Create Toolkit from BPMN Archive

>Creates a toolkit from a BPMN 2.0 archive

**Path**

    /rest/bpm/wle/v1/toolkit

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Generate Advanced Integration Services|`genAIS`|`boolean`|no|Create Advanced Integration Services for unimplemented services|
|Document File|`data`|`file`|yes|File path of the document|

---

### Exposed Scoreboards

>Retrieves exposed scoreboards

**Path**

    /rest/bpm/wle/v1/exposed/scoreboard

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Exposed Reports

>Retrieves exposed reports

**Path**

    /rest/bpm/wle/v1/exposed/report

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Exposed Items (All)

>Retrieves all items exposed to the user: processes (BPDs), services, reports and scoreboards

**Path**

    /rest/bpm/wle/v1/exposed

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Include Service Subtypes|`includeServiceSubtypes`|`string`|no|A comma-separated list of one or more service subtypes to be included in the result set. If not specified, then all service subtypes will be included.|

---

## Social API
Social REST API
### Retrieve Instance Stream

>Retrieves the activity stream for a specific BPD instance

**Path**

    /rest/bpm/wle/v1/social/instance/<instanceId>/stream

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance ID|`instanceId`|`string`|yes|The instance ID or process ID, also known as a piid. Can be found through Task API > Task Details.|
|Sort Order|`sort`|`string`|no|The sort order. Choose 'asc' for ascending, 'desc' for descending. Default is 'desc'.|
|Page|`page`|`string`|no|The page of items to return. The default is no paging. Pages start at 1. Using 0 disables paging.|
|Page Size|`pagesize`|`string`|no|The number of items to return on a page. The default is 10.|
|Since|`since`|`string`|no|A filter for returning items only available since this date/time. The format is in the form of "2010-10-10T00:00:00"|

---

### Retrieve Mentions

>Retrieves a stream of items in which the current user was mentioned

**Path**

    /rest/bpm/wle/v1/social/instances/mentions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Sort Order|`sort`|`string`|no|The sort order. Choose 'asc' for ascending, 'desc' for descending. Default is 'desc'.|
|Page|`page`|`string`|no|The page of items to return. The default is no paging. Pages start at 1. Using 0 disables paging.|
|Page Size|`pagesize`|`string`|no|The number of items to return on a page. The default is 10.|
|Since|`since`|`string`|no|A filter for returning items only available since this date/time. The format is in the form of "2010-10-10T00:00:00"|

---

### Delete Mentions

>Deletes a mentioned item

**Path**

    /rest/bpm/wle/v1/social/task/<taskId>/mentions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`DELETE`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|Task ID, the unique integer ID of the task|

---

### Delete All Mentions

>Deletes all mentioned items for current user

**Path**

    /rest/bpm/wle/v1/social/task/mentions/all

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`DELETE`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Retrieve All Following

>Returns the list of all instances that the current user is following

**Path**

    /rest/bpm/wle/v1/social/instances/following

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Retrieve Following Instance

>Returns true if the current user is following a specific BPD instance

**Path**

    /rest/bpm/wle/v1/social/instance/<instanceId>/following

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance ID|`instanceId`|`string`|yes|The instance ID or process ID, also known as a piid. Can be found through Task API > Task Details.|

---

### Start Following Instance

>Allows user to start following a specific BPD instance

**Path**

    /rest/bpm/wle/v1/social/instance/<instanceId>/following

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance ID|`instanceId`|`string`|yes|The instance ID or process ID, also known as a piid. Can be found through Task API > Task Details.|

---

### Stop Following Instance

>Allows user to stop following a specific BPD instance

**Path**

    /rest/bpm/wle/v1/social/instance/<instanceId>/following

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`DELETE`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance ID|`instanceId`|`string`|yes|The instance ID or process ID, also known as a piid. Can be found through Task API > Task Details.|

---

### Retrieve Task Stream

>Retrieves the activity stream for the BPD instance associated with a given task

**Path**

    /rest/bpm/wle/v1/social/task/<taskId>/stream

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|Task ID, the unique integer ID of the task|
|Sort Order|`sort`|`string`|no|The sort order. Choose 'asc' for ascending, 'desc' for descending. Default is 'desc'.|
|Page|`page`|`string`|no|The page of items to return. The default is no paging. Pages start at 1. Using 0 disables paging.|
|Page Size|`pagesize`|`string`|no|The number of items to return on a page. The default is 10.|
|Since|`since`|`string`|no|A filter for returning items only available since this date/time. The format is in the form of "2010-10-10T00:00:00"|

---

### Post Threaded Comment

>Allows posting a threaded comment to an existing comment or task

**Path**

    /rest/bpm/wle/v1/social/task/<taskId>/comment

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|Task ID, the unique integer ID of the task|
|Comment|`message`|`string`|yes|Comment message|

---

### Retrieve Following Task

>Returns true if the current user is following a specific task

**Path**

    /rest/bpm/wle/v1/social/task/<taskId>/following

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|Task ID, the unique integer ID of the task|

---

### Start Following Task

>Allows user to start following a specific task

**Path**

    /rest/bpm/wle/v1/social/task/<taskId>/following

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|Task ID, the unique integer ID of the task|

---

### Stop Following Task

>Allows user to stop following a specific task

**Path**

    /rest/bpm/wle/v1/social/task/<taskId>/following

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`DELETE`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|Task ID, the unique integer ID of the task|

---

### Retrieve User''s Expert Data

>Retrieves the expert information for a single specific user

**Path**

    /rest/bpm/wle/v1/social/task/<taskId>/userdata

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|Task ID, the unique integer ID of the task|
|User Name|`username`|`string`|yes|User name|

---

### Task Experts

>Retrieves experts information for a specific task

**Path**

    /rest/bpm/wle/v1/social/task/<taskId>/experts

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no|`groupDetails`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|Task ID, the unique integer ID of the task|

---

### Retrieve User Avatar

>Retrieves the avatar image for a specific user

**Path**

    /rest/bpm/wle/v1/avatar/<user>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|User Name|`user`|`string`|yes|Name of the user|

---

### Retrieve Avatar

>Retrieves the avatar image for the current user

**Path**

    /rest/bpm/wle/v1/avatar/current

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Delete Avatar

>Deletes the avatar image for the current user

**Path**

    /rest/bpm/wle/v1/avatar/current

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`DELETE`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Collaboration System Integration Details

>Retrieves the connection information for any defined collaboration system, such as IBM Sametime or IBM Connections.

**Path**

    /rest/bpm/wle/v1/social/system/integrations

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

## Event Handling API
Event Handling REST API
### Send Event

>Use this method to send an ECM event to IBM Business Process Manager.

**Path**

    /rest/bpm/wle/v1/event/ecm?

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Event Source ID|`eventSourceId`|`string`|yes|Id of the ECM server repository sending the event.|
|Object Type ID|`objectTypeId`|`string`|yes|Id of the object type of the object the event occurred on.|
|Event Type|`eventType`|`list`<ul><li>`CheckOutCanceled`</li><li>`CheckedIn`</li><li>`CheckedOut`</li><li>`ClassChanged`</li><li>`ClassifyCompleted`</li><li>`Created`</li><li>`Deleted`</li><li>`Filed`</li><li>`Frozen`</li><li>`Locked`</li><li>`PublishCompleted`</li><li>`PublishRequested`</li><li>`SecurityUpdated`</li><li>`StateChanged`</li><li>`Unfiled`</li><li>`Unlocked`</li><li>`Updated`</li><li>`VersionDemoted`</li><li>`VersionPromoted`</li></ul>|yes|Type of the event.|
|Object ID|`objectId`|`string`|yes|Id of the object instance the event occurred on.|

---

