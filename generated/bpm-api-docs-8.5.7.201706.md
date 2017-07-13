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
  * [Process Bulk Operation](#process-bulk-operation)
  * [Instance Error Details](#instance-error-details)
  * [Run Ad Hoc Event](#run-ad-hoc-event)
  * [Delete Token](#delete-token)
  * [Move Token](#move-token)
  * [Add Comment](#add-comment)
  * [Add Document](#add-document)
  * [Update Document](#update-document)
  * [Delete Document](#delete-document)
  * [Task Summary](#task-summary)
  * [Process Queries [deprecated]](#process-queries-deprecated)
  * [Process Query Attributes [deprecated]](#process-query-attributes-deprecated)
  * [Process Query Entity List [deprecated]](#process-query-entity-list-deprecated)
  * [Process Query Entity List Count [deprecated]](#process-query-entity-list-count-deprecated)
  * [Fire Timer](#fire-timer)
  * [Send Message](#send-message)
  * [Currently Running Instances](#currently-running-instances)
  * [Exposed Processes](#exposed-processes)
  * [Show Process Actions](#show-process-actions)
  * [Process Actions](#process-actions)
  * [Bulk Instance Details](#bulk-instance-details)
  * [Ad Hoc Activities](#ad-hoc-activities)
  * [Process Instances Status Overview](#process-instances-status-overview)
  * [Process Instances Search](#process-instances-search)
  * [Update Instance Variable](#update-instance-variable)
  * [Update Instance Variables](#update-instance-variables)
  * [Bulk Action with Search Filters](#bulk-action-with-search-filters)
  * [Get Dependent Process](#get-dependent-process)
  * [Get Depended on Processes](#get-depended-on-processes)
  * [Get Related Processes](#get-related-processes)
  * [Get Process Relationships](#get-process-relationships)
  * [Create or Remove Process Instance Relationship](#create-or-remove-process-instance-relationship)
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
  * [Task Queries [deprecated]](#task-queries-deprecated)
  * [Task Query Attributes [deprecated]](#task-query-attributes-deprecated)
  * [Task Query Entity List [deprecated]](#task-query-entity-list-deprecated)
  * [Task Query Entity List Count [deprecated]](#task-query-entity-list-count-deprecated)
  * [Invite a User for Task Collaboration](#invite-a-user-for-task-collaboration)
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
  * [Disable Activity](#disable-activity)
  * [Enable Activity](#enable-activity)
  * [Tasks](#tasks)
- [Search API](#search-api)
  * [Run Query [deprecated]](#run-query-deprecated)
  * [Execute Performance Query](#execute-performance-query)
  * [Run Performance Instance Query](#run-performance-instance-query)
  * [Search Metadata [deprecated]](#search-metadata-deprecated)
  * [Create Saved Search Definition](#create-saved-search-definition)
  * [Retrieve Saved Search Definition](#retrieve-saved-search-definition)
  * [Update Saved Search Definition](#update-saved-search-definition)
  * [Delete Saved Search Definition](#delete-saved-search-definition)
  * [Retrieve Saved Search Definitions List](#retrieve-saved-search-definitions-list)
  * [Saved Search Execution](#saved-search-execution)
  * [AdHoc Search Execution](#adhoc-search-execution)
  * [Search Definition Meta Data By Type](#search-definition-meta-data-by-type)
  * [Saved Search Definition User Actions](#saved-search-definition-user-actions)
- [Business Object API](#business-object-api)
  * [Get Definition](#get-definition)
- [Organization API](#organization-api)
  * [Users](#users)
  * [User Details](#user-details)
  * [User Details by userName](#user-details-by-username)
  * [User Details by userID](#user-details-by-userid)
  * [Current User](#current-user)
  * [Set User Preference](#set-user-preference)
  * [Set User Preferences](#set-user-preferences)
  * [Groups](#groups)
  * [Group Details](#group-details)
  * [Add Group Member](#add-group-member)
  * [Remove Group Member](#remove-group-member)
  * [Team Details (by Team ID)](#team-details-by-team-id)
  * [Team Details (by Team Name)](#team-details-by-team-name)
  * [Global Teams](#global-teams)
- [Process Documentation API](#process-documentation-api)
  * [Assets](#assets)
  * [Asset Comparison](#asset-comparison)
  * [Snapshots in a Project](#snapshots-in-a-project)
  * [Branches in a project](#branches-in-a-project)
  * [Retrieves REST Application Adapter for IBM Worklight](#retrieves-rest-application-adapter-for-ibm-worklight)
  * [Snapshots in a branch](#snapshots-in-a-branch)
  * [Snapshot change history](#snapshot-change-history)
  * [Delta Changes Between Snapshots](#delta-changes-between-snapshots)
  * [Retrieves REST Application Adapter for IBM Worklight](#retrieves-rest-application-adapter-for-ibm-worklight-1)
  * [Process App Settings](#process-app-settings)
  * [Process Visual Model](#process-visual-model)
  * [Process Instances Visual Model](#process-instances-visual-model)
  * [Service Visual Model](#service-visual-model)
  * [Advanced Integration Service](#advanced-integration-service)
  * [Team](#team)
  * [Exposed Process Value](#exposed-process-value)
  * [Tracking Group](#tracking-group)
  * [Timing Interval](#timing-interval)
  * [Undercover Agent](#undercover-agent)
  * [Web Service](#web-service)
  * [Service Level Agreement](#service-level-agreement)
- [Other](#other)
  * [Retrieve System Details](#retrieve-system-details)
  * [Retrieve REST generic adapter for IBM Worklight](#retrieve-rest-generic-adapter-for-ibm-worklight)
  * [Retrieve Resource Environment Providers](#retrieve-resource-environment-providers)
  * [Retrieve Resource Environment Provider Properties](#retrieve-resource-environment-provider-properties)
  * [Retrieve System Environment Variable](#retrieve-system-environment-variable)
  * [Retrieve Process Applications](#retrieve-process-applications)
  * [Retrieve Toolkits](#retrieve-toolkits)
  * [Create Process Application from BPMN Archive](#create-process-application-from-bpmn-archive)
  * [Create Toolkit from BPMN Archive](#create-toolkit-from-bpmn-archive)
  * [Exposed Scoreboards](#exposed-scoreboards)
  * [Exposed Reports](#exposed-reports)
  * [Exposed Items (All)](#exposed-items-all)
  * [Retrieve Alert Definitions](#retrieve-alert-definitions)
  * [Save Alert Definitions](#save-alert-definitions)
  * [Delete Alert Definition](#delete-alert-definition)
  * [Retrieve Alert Definitions Status](#retrieve-alert-definitions-status)
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
- [Relationship API](#relationship-api)
  * [Update or Remove Relationship](#update-or-remove-relationship)

## Process API
Process REST API
### Retrieve Model

>Retrieves the model data (BPD model) for a particular BPD

**Path**

    /rest/bpm/wle/v1/processModel/<bpdId>?

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`header`, `dataModel`, `diagram`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|BPD ID|`bpdId`|`string`|yes|Business process definition ID. You can use the "v1/exposed/process" API to retrieve the list of business process definitions (BPDs) that are available to the user.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|
|Process Application ID|`processAppId`|`string`|no|The process app ID begins with "2066.xxx". You can find the process app ID by selecting Other > Retrieve Process Applications.|

---

### External Activity Model

>Retrieves the model data for an external activity

**Path**

    /rest/bpm/wle/v1/externalactivity/<externalActivityId>/model

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`dataModel`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|External Activity ID|`externalActivityId`|`string`|yes|ID of the external activity|
|Authoring|`authoring`|`boolean`|no|Select to retrieve the model for process documentation. The snapshot ID or branch ID option must be set when authoring is enabled.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|
|Process Application ID|`processAppId`|`string`|no|The process app ID begins with "2066.xxx". You can find the process app ID by selecting Other > Retrieve Process Applications.|

---

### Start Process

>Starts a new BPD instance

**Path**

    /rest/bpm/wle/v1/process?action=start

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|BPD ID|`bpdId`|`string`|yes|Business process definition ID. You can use the "v1/exposed/process" API to retrieve the list of business process definitions (BPDs) that are available to the user.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|
|Process Application ID|`processAppId`|`string`|no|The process app ID begins with "2066.xxx". You can find the process app ID by selecting Other > Retrieve Process Applications.|
|Parameters|`params`|`string`|no|A string that contains a JSON expression that has one or more input parameter settings. Each of the variables is set in the context of the running process, for example ....params={"orderNumber":"5","customerName":{"firstName":"John","lastName":"Doe"}}|
|Mode|`mode`|`string`|no|A string indicating whether the process should be started in run or debug mode.|

---

### Current State

>Returns the current state of a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`diagram`, `header`, `data`, `executionTree`, `actions` (v2.0), `summary`, `relationships`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Task Limit|`taskLimit`|`string`|no|The maximum number of tasks to be returned|
|Task Offset|`taskOffset`|`string`|no|Specifies the index (origin 0) of the first task instance to be returned from the result set|

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
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|JavaScript Expression|`script`|`string`|yes|The JavaScript expression to evaluate|

---

### Update Due Date

>Sets a new due date on a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=update

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Due Date|`dueDate`|`string`|yes|Due date in ISO-8601 format (e.g. 2011-01-05T03:15:30.000-00:00)|

---

### Suspend Process

>Pauses a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=suspend

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|

---

### Resume Process

>Resumes a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=resume

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|

---

### Retry Process

>Retries a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=retry

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|

---

### Terminate Process

>Terminates a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=terminate

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|

---

### Delete Process

>Deletes a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=delete

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`DELETE`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|

---

### Process Bulk Operation

>Performs the same operation against a list of process instances

**Path**

    /rest/bpm/wle/v1/process/bulk

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|yes|yes|`diagram`, `header`, `data`, `executionTree`, `actions` (v2.0)|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance IDs|`instanceIds`|`string`|yes|A comma-separated list of instance IDs or process IDs, also known as a piids. You can find these IDs by selecting Task API > Task Details.|
|Action|`action`|`list`<ul><li>`suspend`</li><li>`resume`</li><li>`retry`</li><li>`terminate`</li><li>`delete`</li></ul>|yes|The action to perform|

---

### Instance Error Details

>Retrieves detailed error information for one or more process instances

**Path**

    /rest/bpm/wle/v1/process/errors

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance IDs|`instanceIds`|`string`|yes|A comma-separated list of instance IDs or process IDs, also known as a piids. You can find these IDs by selecting Task API > Task Details.|

---

### Run Ad Hoc Event

>Runs an ad hoc event in the BPD instance. The available ad hoc steps are available from the BPD model.

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=adhoc

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Step|`step`|`string`|yes|Step|

---

### Delete Token

>Delete a token from a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=deleteToken&tokenId=<tokenId>&resume=<resume>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Token ID|`tokenId`|`string`|yes|The token ID|
|Resume|`resume`|`boolean`|no|Resumes a BPD instance|

---

### Move Token

>Move a token to a new activity

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=moveToken&tokenId=<tokenId>&target=<target>&resume=<resume>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
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
|`POST`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Comment|`comment`|`string`|yes|The comment message|
|Original Comment ID|`origCommentId`|`string`|no|The original comment ID, for threaded comments|

---

### Add Document

>Adds a document to a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=addDocument

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Name|`name`|`string`|yes|Name of the document|
|Hide in portal|`hideInPortal`|`boolean`|no|A flag to indicate if the document is to be hidden from users.|
|Type|`docType`|`extended_option_selector`|yes|Type of document|

---

### Update Document

>Updates a document associated with a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=updateDocument

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`, `PUT`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Document ID|`docId`|`string`|yes|ID of the document|
|Type|`docType`|`extended_option_selector`|yes|Type of document|

---

### Delete Document

>Deletes a document from a BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=deleteDocument

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`, `DELETE`|yes|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Document ID|`docId`|`string`|yes|ID of the document|

---

### Task Summary

>Retrieves a list of task summaries for a particular BPD instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/taskSummary/<status>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Status Filter|`status`|`list`<ul><li>``</li><li>`Active`</li><li>`Completed`</li><li>`All`</li></ul>|no|The task statuses to filter on|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used.|
|Size|`limit`|`string`|no|Specifies the maximum number of entities to be returned. If a number is not specified, the default size defined for the query will be used.|

---

### Process Queries [deprecated]

>This function is deprecated. Retrieves a list of queries for BPD instance data.

**Path**

    /rest/bpm/wle/v1/processes/queries

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Kind|`kind`|`list`<ul><li>``</li><li>`SAVED_SEARCH`</li></ul>|no|The kind attribute for the queries, which is used as a filter|
|Content|`content`|`string`|no|Specifies a comma-separated list of content values. When you use this parameter, only queries that return the specified content values in their result set are returned. For example, if you specified content=TASK.PRIORITY,TASK.TKIID in your request URI query string, the response includes only those queries that return both content types.|
|includeTaskData|`includeTaskData`|`string`|no|A string that indicates whether the response should include task information data. Valid values are TRUE and FALSE. The default value is FALSE.|

---

### Process Query Attributes [deprecated]

>This function is deprecated. Retrieves a list of attributes of a query for BPD instance data

**Path**

    /rest/bpm/wle/v1/processes/query/<queryName>/attributes

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|includeTaskData|`includeTaskData`|`string`|no|A string that indicates whether the response should include task information data. Valid values are TRUE and FALSE. The default value is FALSE.|

---

### Process Query Entity List [deprecated]

>This function is deprecated. Retrieves a list of BPD instance entities obtained via a query

**Path**

    /rest/bpm/wle/v1/processes/query/<queryName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Selected Attributes|`selectedAttributes`|`string`|no|Comma-separated list of attributes, in uppercase letters, which specifies the attributes that the query retrieves. If no attributes are specified, all the attributes that are defined on the query are returned.|
|Interaction Filter|`interactionFilter`|`list`<ul><li>``</li><li>`ADMINISTER`</li><li>`BROWSE_ALL`</li></ul>|no|Name of a predefined user interaction|
|Query Filter|`queryFilter`|`string`|no|A query table condition language expression that performs additional filtering on the result set. All attributes defined on the query can be referenced.|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Sort Attributes|`sortAttributes`|`string`|no|Comma-separated list of sort criteria applied to the list of returned process instance entities. Each list entry has the form attribute [ASC|DESC]. ASC (ascending) is the default.|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used.|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If a number is not specified, the default size defined for the query will be used.|
|includeTaskData|`includeTaskData`|`string`|no|A string that indicates whether the response should include task information data. Valid values are TRUE and FALSE. The default value is FALSE.|
|Filter By Current User|`filterByCurrentUser`|`string`|no|A flag that is used only when an administrative user runs the request; otherwise, it is ignored. This parameter indicates whether the search results should be restricted to those entities that are associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, the default is to perform a filtered search. If the current user is not an administrative user, this parameter is ignored and a filtered search is performed.|

---

### Process Query Entity List Count [deprecated]

>This function is deprecated. Retrieves the number of BPD instance entities in a query meeting specified criteria

**Path**

    /rest/bpm/wle/v1/processes/query/<queryName>/count

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Query Filter|`queryFilter`|`string`|no|A query table condition language expression that performs additional filtering on the result set. All attributes defined on the query can be referenced.|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used.|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If a number is not specified, the default size defined for the query will be used.|
|Filter By Current User|`filterByCurrentUser`|`string`|no|A flag that is used only when an administrative user runs the request; otherwise, it is ignored. This parameter indicates whether the search results should be restricted to those entities that are associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, the default is to perform a filtered search. If the current user is not an administrative user, this parameter is ignored and a filtered search is performed.|

---

### Fire Timer

>Allows the current user to manually fire an inline or attached timer

**Path**

    /rest/bpm/wle/v1/process/<instanceId>?action=fireTimer

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|yes|`diagram`, `header`, `data`, `executionTree`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Timer Token ID|`timerTokenId`|`string`|yes|Token ID of the timer. You can find a token by selecting Task API > Task Details.|

---

### Send Message

>Allows the current user to target an event message to the given process instance

**Path**

    /rest/bpm/wle/v1/process?action=sendMessage

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Message|`message`|`text`|yes|Message to be sent|

---

### Currently Running Instances

>Lists all processes that are currently running instances

**Path**

    /rest/bpm/wle/v1/process/currentlyExecuting

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|yes||


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
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Show Process Actions

>Retrieves a list of actions (both adh oc and standard) that are available to the current user for the specified process instance

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/actions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|

---

### Process Actions

>Retrieves a list of actions that can be performed on process instances

**Path**

    /rest/bpm/wle/v1/process/actions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance IDs|`instanceIds`|`string`|yes|A comma-separated list of instance IDs or process IDs, also known as a piids. You can find these IDs by selecting Task API > Task Details.|
|Actions|`actions`|`string`|no|A comma-separated list of actions|

---

### Bulk Instance Details

>Retrieves the details for a set of instances

**Path**

    /rest/bpm/wle/v1/process?action=getdetails

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance IDs|`instanceIds`|`string`|yes|A comma-separated list of instance IDs or process IDs, also known as a piids. You can find these IDs by selecting Task API > Task Details.|

---

### Ad Hoc Activities

>Returns a list of ad hoc activities.

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/adHocActivities

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|

---

### Process Instances Status Overview

>Retrieves the number of BPD instance entities based on their status

**Path**

    /rest/bpm/wle/v1/processes/status/overview

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Modified After|`modifiedAfter`|`string`|no|Include only the number of BPD instances that occur on or after the specified date. The date must be in ISO8601 format, such as 2011-08-04T03:12:53Z.|
|Modified Before|`modifiedBefore`|`string`|no|Include only the number of BPD instances that occur on or before the specified date. The date must be in ISO8601 format, such as 2011-08-04T03:12:53Z.|
|User Filter|`userFilter`|`string`|no|Include only the number of BPD instances associated with the specified user |
|Search Filter|`searchFilter`|`string`|no|A search expression that is used as input to the task search engine|
|Search Filter Scope|`searchFilterScope`|`string`|no|Specifies the scope of the search filter. Supported values are AppShortName, InstanceName or Both. The default value is Both.|

---

### Process Instances Search

>Retrieves a list of BPD instances and the number of BPD instance entities that they contain according to the status code

**Path**

    /rest/bpm/wle/v1/processes/search

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Modified After|`modifiedAfter`|`string`|no|Include only the number of BPD instances that occur on or after the specified date. The date must be in ISO8601 format, such as 2011-08-04T03:12:53Z.|
|Modified Before|`modifiedBefore`|`string`|no|Include only the number of BPD instances that occur on or before the specified date. The date must be in ISO8601 format, such as 2011-08-04T03:12:53Z.|
|User Filter|`userFilter`|`string`|no|Include only the number of BPD instances associated with the specified user |
|Search Filter|`searchFilter`|`string`|no|Include only the number of BPD instances with the specified name, include only the number of BPD instances that belong to the process application with the specified short name, or include the total from both types of searches. The searchFilterScope parameter specifies which type of search to do.|
|Search Filter Scope|`searchFilterScope`|`string`|no|Specifies the scope of the search filter. Supported values are AppShortName, InstanceName or Both. The default value is Both.|
|Status Filter|`statusFilter`|`string`|no|Return the instances that have only the specified status. The list of status values is Active, Completed, Failed, Terminated, Suspended, Late, AtRisk. To specify more than one status value, separate each one with a comma such as Active,Late,Failed,AtRisk.|
|Project Filter|`projectFilter`|`string`|no|Return the instances for the specified projects identified by their acronyms (short names). To specify more than one project, separate each one with a comma such as APP1,APP2.|
|Offset|`offset`|`integer`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used.|
|Limit|`limit`|`integer`|no|The maximum number of entities to be returned.|
|Sort By|`sortBy`|`string`|no|How the entities are sorted: by last modified date or by severity|

---

### Update Instance Variable

>Updates an instance variable value

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/variable/<varName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance ID|`instanceId`|`string`|yes|Instance ID or process ID, also known as a piid. You can find this ID by selecting Task API > Task Details.|
|Variable Name|`varName`|`string`|yes|Variable Name|
|Request Body (variable value in JSON format)|`$body`|`json`|yes|Variable Value|

---

### Update Instance Variables

>Updates instance variables (bulk update)

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/variables

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance ID|`instanceId`|`string`|yes|Instance ID or process ID, also known as a piid. You can find this ID by selecting Task API > Task Details.|
|Request Body (variable values in JSON format)|`$body`|`json`|yes|Values of the instance variables in JSON format|

---

### Bulk Action with Search Filters

>Takes bulk action on instances that were retrieved by using the search filters

**Path**

    /rest/bpm/wle/v1/process/bulkWithFilters

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Action|`action`|`list`<ul><li>`suspend`</li><li>`resume`</li><li>`retry`</li><li>`terminate`</li><li>`delete`</li></ul>|yes|The action to perform|
|Modified After|`modifiedAfter`|`string`|no|Include only the number of BPD instances that occur on or after the specified date. The date must be in ISO8601 format, such as 2011-08-04T03:12:53Z.|
|Modified Before|`modifiedBefore`|`string`|no|Include only the number of BPD instances that occur on or before the specified date. The date must be in ISO8601 format, such as 2011-08-04T03:12:53Z.|
|User Filter|`userFilter`|`string`|no|Include only the number of BPD instances associated with the specified user |
|Search Filter|`searchFilter`|`string`|no|Include only the number of BPD instances with the specified name, include only the number of BPD instances that belong to the process application with the specified short name, or include the total from both types of searches. The searchFilterScope parameter specifies which type of search to do.|
|Search Filter Scope|`searchFilterScope`|`string`|no|Specifies the scope of the search filter. Supported values are AppShortName, InstanceName or Both. The default value is Both.|
|Status Filter|`statusFilter`|`string`|no|Return the instances that have only the specified status. The list of status values is Active, Completed, Failed, Terminated, Suspended, Late, AtRisk. To specify more than one status value, separate each one with a comma such as Active,Late,Failed,AtRisk.|
|Project Filter|`projectFilter`|`string`|no|Return the instances for the specified projects identified by their acronyms (short names). To specify more than one project, separate each one with a comma such as APP1,APP2.|
|Sort By|`sortBy`|`string`|no|How the entities are sorted: by last modified date or by severity|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used.|
|Limit|`limit`|`integer`|no|The maximum number of entities to be returned.|

---

### Get Dependent Process

>Returns a process instance that is dependent on the current process instance.

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/dependentProcess

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`header`, `summary`, `data`, `dataModel`, `diagram`, `executionTree`, `actions` (v2.0), `relationships`, `excludeDocs`, `none`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|

---

### Get Depended on Processes

>Returns a list of process instances on which the current process instance is dependent.

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/dependedOnProcesses

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`header`, `summary`, `data`, `dataModel`, `diagram`, `executionTree`, `actions` (v2.0), `relationships`, `excludeDocs`, `none`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Status Filter|`statusFilter`|`string`|no|A filter to return only process instances that only have the specified status. Multiple status values can be specified by separating each value with a comma. Valid values are 'Active', 'Completed', 'Failed', 'Terminated', 'Did_not_Start', 'Suspended'.|

---

### Get Related Processes

>Returns a list of process instances that have independent relationships with the current process instance.

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/relatedProcesses

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`header`, `summary`, `data`, `dataModel`, `diagram`, `executionTree`, `actions` (v2.0), `relationships`, `excludeDocs`, `none`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Status Filter|`statusFilter`|`string`|no|A filter to return only process instances that only have the specified status. Multiple status values can be specified by separating each value with a comma. Valid values are 'Active', 'Completed', 'Failed', 'Terminated', 'Did_not_Start', 'Suspended'.|

---

### Get Process Relationships

>Returns a list of relationships associated with the process instance.

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/relationships

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Type|`type`|`list`<ul><li>`INDEPENDENT`</li><li>`DEPENDENT`</li></ul>|no|The type of the relationship. 'INDEPENDENT' is an independent relationship. 'DEPENDENT' - prevents completion of the current process instance until the instance that it depends on completes.|

---

### Create or Remove Process Instance Relationship

>Creates or removes a relationship between two process instances.

**Path**

    /rest/bpm/wle/v1/process/<instanceId>/relationship

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`, `DELETE`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|
|Type|`type`|`list`<ul><li>`INDEPENDENT`</li><li>`DEPENDENT`</li></ul>|yes|The type of the relationship. 'INDEPENDENT' is an independent relationship. 'DEPENDENT' - prevents completion of the current process instance until the instance that it depends on completes.|
|Target Id|`targetId`|`instanceid`|yes|The process instance ID of the instance to which the relationship is being created or removed.|
|Description|`description`|`string`|no|The new description for the relationship.|

---

## Service API
Service REST API
### Retrieve Model

>Retrieves the model data (service model) for a particular service

**Path**

    /rest/bpm/wle/v1/serviceModel/<serviceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|yes|`header`, `dataModel`, `diagram`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service ID or Name|`serviceId`|`string`|yes|A service model ID or a string of the form <project-acronym>@<service-name>|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Process Application ID|`processAppId`|`string`|no|The process app ID begins with "2066.xxx". You can find the process app ID by selecting Other > Retrieve Process Applications.|

---

### Start Service

>Runs a service until a natural stop (either a coach, postpone, or the end)

**Path**

    /rest/bpm/wle/v1/service/<serviceId>?action=start

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|yes|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service ID or Name|`serviceId`|`string`|yes|A service model ID or a string of the form <project-acronym>@<service-name>|
|Parameters|`params`|`string`|no|A string that contains a JSON expression that has one or more input parameter settings. Each of the variables is set in the context of the running process, for example ....params={"orderNumber":"5","customerName":{"firstName":"John","lastName":"Doe"}}|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Create Task|`createTask`|`boolean`|no|Indicates whether a corresponding task should be created when starting the service.|
|Caller Model ID|`callerModelId`|`string`|no|The ID of an task or process model that can be associated with the new service instance. If a callerModelId is not specified, the new service instance will not be associated with an existing caller model. For secured Ajax services, this setting is also used to check whether the current user is authorized to start the Ajax service, by checking whether the caller model relies on the Ajax service.|
|Caller Model Branch ID|`callerModelBranchId`|`string`|no|The ID of the branch that determines the exact version of a given callerModelId. If a callerModelBranchId is specified, this does implicitly indicate that a Tip is to be used, and the callerModelSnapshotId may not be specified in this case. If a callerModelId is specified, then either a callerModelBranchId or a callerModelSnapshotId is required.|
|Caller Model Snapshot ID|`callerModelSnapshotId`|`string`|no|The ID of the snapshot that determines the exact version of a given callerModelId. If a callerModelSnapshotId is specified, this does implicitly indicate that a Tip is not to be used, and the callerModelBranchId may not be specified in this case. If a callerModelId is specified, then either a callerModelSnapshotId or a callerModelBranchId is required.|
|Caller Process ID|`callerProcessId`|`string`|no|The ID of an existing process that can be associated with the new service instance. If a process ID is not specified, the new service instance will not be associated with an existing process. For secured Ajax services, this setting is also used to check whether the current user is authorized to start the Ajax service, by checking whether the process model relies on the Ajax service.|
|Caller Task ID|`callerTaskId`|`string`|no|The ID of an existing task that can be associated with the new service instance. If a task ID is not specified, the new service instance will not be associated with an existing task. For secured Ajax services, this setting is also used to check whether the current user is authorized to start the Ajax service, by checking whether the task model relies on the Ajax service.|

---

### Resume Service

>Resumes a running service or task until a natural stop (either a coach, postpone, or the end)

**Path**

    /rest/bpm/wle/v1/service/<instanceId>?action=<action>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|yes|`data`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service Instance ID|`instanceId`|`string`|yes|The service instance ID, which is the value that is returned as the "key" element within the ServiceRunModel response when starting a service|
|Button or Endpoint|`action`|`string`|yes|Represents buttons or endPoints on a coach|

---

### Evaluate JavaScript

>Evaluates a JavaScript expression against a currently running service

**Path**

    /rest/bpm/wle/v1/service/<instanceId>?action=js

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|yes||


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
|`GET`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service Instance ID or Task ID|`instanceId`|`string`|yes|Either a service instance ID (a string of the form @<nnnn> where <nnnn> is a string of digits) or a task instance ID (a string of digits). You can find the service instance ID in the "key" field that is returned in the response of selecting Service API > Start Service. You can find the task instance ID in the "task.tkiid" fields that are returned in the response of selecting Process API > Current State.|
|Fields|`fields`|`string`|yes|A comma-separated list of fields|

---

### Set Data

>Sets a value to a field

**Path**

    /rest/bpm/wle/v1/service/<instanceId>?action=setData

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service Instance ID or Task ID|`instanceId`|`string`|yes|Either a service instance ID (a string of the form @<nnnn> where <nnnn> is a string of digits) or a task instance ID (a string of digits). You can find the service instance ID in the "key" field that is returned in the response of selecting Service API > Start Service. You can find the task instance ID in the "task.tkiid" fields that are returned in the response of selecting Process API > Current State.|
|Parameters|`params`|`string`|yes|A string that contains a JSON expression that has one or more input parameter settings. Each of the variables is set in the context of the running process, for example ....params={"orderNumber":"5","customerName":{"firstName":"John","lastName":"Doe"}}|

---

### Stop Service

>Stops a service

**Path**

    /rest/bpm/wle/v1/service/<instanceId>?action=stop

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|yes||


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
|`GET`|no|yes||


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
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Include Service Subtypes|`includeServiceSubtypes`|`string`|no|A comma-separated list of one or more service subtypes to be included in the result set. If service subtypes are not specified, all service subtypes are included.|

---

## Task API
Task REST API
### Task Details

>Retrieves the details of a task

**Path**

    /rest/bpm/wle/v1/task/<taskId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`data`, `actions` (v2.0)|


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
|`GET`|yes|yes||


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
|`PUT`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|Parameters|`params`|`string`|yes|A string that contains a JSON expression that has one or more input parameter settings. Each of the variables is set in the context of the running process, for example ....params={"orderNumber":"5","customerName":{"firstName":"John","lastName":"Doe"}}|

---

### Bulk Task Details

>Retrieves the details for a set of tasks

**Path**

    /rest/bpm/wle/v1/task?action=getdetails

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`data`, `actions` (v2.0)|


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
|`PUT`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|

---

### Assign Task To User

>Assigns a task to a user.

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=assign

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes|`data`, `actions` (v2.0)|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|To User|`toUser`|`string`|yes|Assign to a particular user|

---

### Assign Task To Group

>Assign a task to a group.

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=assign

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes|`data`, `actions` (v2.0)|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|To Group|`toGroup`|`string`|yes|Assign to a particular group|

---

### Assign Task To Me

>Assign a task to the current user.

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=assign&toMe=true

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes|`data`, `actions` (v2.0)|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|

---

### Assign Task Back

>Assign a task to the original owner.

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=assign&back=true

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes|`data`, `actions` (v2.0)|


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
|`PUT`|yes|yes|`data`, `actions` (v2.0)|


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
|`PUT`|yes|yes|`data`, `actions` (v2.0)|


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
|`PUT`|yes|yes|`data`, `actions` (v2.0)|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|Parameters|`params`|`string`|no|Parameters to finish the task or activity|

---

### Cancel Task

>Cancels a task

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=cancel

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|

---

### Task Client Settings

>Retrieves client settings for a specific task instance

**Path**

    /rest/bpm/wle/v1/task/<taskId>/clientSettings/<type>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|Type|`type`|`string`|yes|Client type. The only predefined values are "IBM_WLE_Coach" and "External".|

---

### Task Actions

>Retrieves a list of actions that can be performed on task instances

**Path**

    /rest/bpm/wle/v1/task/actions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task IDs|`taskIDs`|`string`|yes|A comma-separated list of task IDs|
|Actions|`actions`|`string`|no|A comma-separated list of actions that the caller is interested in, used as a filter for the response. If actions are not specified, information about all possible actions is returned.|

---

### Task Queries [deprecated]

>This function is deprecated. Retrieves a list of queries for task instance data.

**Path**

    /rest/bpm/wle/v1/tasks/queries

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Kind|`kind`|`list`<ul><li>``</li><li>`SAVED_SEARCH`</li></ul>|no|The kind attribute for the queries, which is used as a filter|
|Content|`content`|`string`|no|Specifies a comma-separated list of content values. When you use this parameter, only queries that return the specified content values in their result set are returned. For example, if you specified content=TASK.PRIORITY,TASK.TKIID in your request URI query string, the response includes only those queries that return both content types.|

---

### Task Query Attributes [deprecated]

>This function is deprecated. Retrieves a list of attributes of a query for task instance data

**Path**

    /rest/bpm/wle/v1/tasks/query/<queryName>/attributes

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|

---

### Task Query Entity List [deprecated]

>This function is deprecated. Retrieves a list of task instance entities obtained by using a query.

**Path**

    /rest/bpm/wle/v1/tasks/query/<queryName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Selected Attributes|`selectedAttributes`|`string`|no|Comma-separated list of attributes, in uppercase letters, which specifies the attributes that the query retrieves. If no attributes are specified, all the attributes that are defined on the query are returned.|
|Interaction Filter|`interactionFilter`|`list`<ul><li>``</li><li>`WORK_ON`</li><li>`WORK_ON_ACTIVE`</li><li>`ASSESS_AVAILABLE`</li><li>`ASSESS_AND_WORK_ON`</li><li>`CHECK_COMPLETED`</li><li>`ADMINISTER`</li><li>`BROWSE_ALL`</li></ul>|no|Name of a predefined user interaction|
|Query Filter|`queryFilter`|`string`|no|A query table condition language expression that performs additional filtering on the result set. All attributes defined on the query can be referenced.|
|Search Filter|`searchFilter`|`string`|no|A search expression that is used as input to the task search engine|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Sort Attributes|`sortAttributes`|`string`|no|Comma-separated list of sort criteria applied to the list of returned process instance entities. Each list entry has the form attribute [ASC|DESC]. ASC (ascending) is the default.|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used.|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If a number is not specified, the default size defined for the query will be used.|
|Filter By Current User|`filterByCurrentUser`|`string`|no|A flag that is used only when an administrative user runs the request; otherwise, it is ignored. This parameter indicates whether the search results should be restricted to those entities that are associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, the default is to perform a filtered search. If the current user is not an administrative user, this parameter is ignored and a filtered search is performed.|
|Calculate Stats|`calcStats`|`boolean`|no|Calculate task statistics|

---

### Task Query Entity List Count [deprecated]

>This function is deprecated. Retrieves the number of task instance entities that meet specified criteria in a query

**Path**

    /rest/bpm/wle/v1/tasks/query/<queryName>/count

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Interaction Filter|`interactionFilter`|`list`<ul><li>``</li><li>`WORK_ON`</li><li>`WORK_ON_ACTIVE`</li><li>`ASSESS_AVAILABLE`</li><li>`ASSESS_AND_WORK_ON`</li><li>`CHECK_COMPLETED`</li><li>`BROWSE_ALL`</li></ul>|no|Name of a predefined user interaction|
|Query Filter|`queryFilter`|`string`|no|A query table condition language expression that performs additional filtering on the result set. All attributes defined on the query can be referenced.|
|Search Filter|`searchFilter`|`string`|no|A search expression that is used as input to the task search engine|
|Filter By Current User|`filterByCurrentUser`|`string`|no|A flag that is used only when an administrative user runs the request; otherwise, it is ignored. This parameter indicates whether the search results should be restricted to those entities that are associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, the default is to perform a filtered search. If the current user is not an administrative user, this parameter is ignored and a filtered search is performed.|

---

### Invite a User for Task Collaboration

>Invite a user to collaborate on a task.

**Path**

    /rest/bpm/wle/v1/task/<taskId>?action=invite&user=<user>&message=<message>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|ID of the task|
|User|`user`|`string`|yes|Represents the user to be invited to collaborate on a task|
|Message|`message`|`string`|no|Message to be sent|

---

### Get Next

>Claim the next task, which is selected based on filter criteria.

**Path**

    /rest/bpm/wle/v1/task?action=getNext&query=<queryName>&queryFilter=<queryFilter>&sortAttributes=<sortAttributes>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Query Filter|`queryFilter`|`string`|no|A query table condition language expression that performs additional filtering on the result set. All attributes defined on the query can be referenced.|
|Sort Attributes|`sortAttributes`|`string`|no|Comma-separated list of sort criteria applied to the list of returned process instance entities. Each list entry has the form attribute [ASC|DESC]. ASC (ascending) is the default.|

---

### Bulk Claim Tasks

>Claim responsibility for multiple task instances.

**Path**

    /rest/bpm/wle/v1/task?action=claim

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task IDs|`taskIDs`|`string`|yes|A comma-separated list of task IDs|

---

### Bulk Cancel Tasks

>Release multiple claimed task instances.

**Path**

    /rest/bpm/wle/v1/task?action=cancel

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|yes|yes||


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
|`GET`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task Template ID|`templateId`|`string`|yes|ID of the task template|

---

### Task Template Client Settings

>Retrieves client settings for a specific task template

**Path**

    /rest/bpm/wle/v1/taskTemplate/<templateId>/clientSettings/<type>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task Template ID|`templateId`|`string`|yes|ID of the task template|
|Type|`type`|`string`|yes|Client type. The only predefined value is "IBM_WLE_Coach".|

---

### Task Template Queries

>Retrieves a list of queries for task template data

**Path**

    /rest/bpm/wle/v1/taskTemplates/queries

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Kind|`kind`|`list`<ul><li>``</li><li>`SAVED_SEARCH`</li></ul>|no|The kind attribute for the queries, which is used as a filter|
|Content|`content`|`string`|no|Specifies a comma-separated list of content values. When you use this parameter, only queries that return the specified content values in their result set are returned. For example, if you specified content=TASK.PRIORITY,TASK.TKIID in your request URI query string, the response includes only those queries that return both content types.|

---

### Task Template Query Attributes

>Retrieves a list of attributes of a query for task template data

**Path**

    /rest/bpm/wle/v1/taskTemplates/query/<queryName>/attributes

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|

---

### Task Template Query Entity List

>Retrieves a list of task template entities obtained by using a query

**Path**

    /rest/bpm/wle/v1/taskTemplates/query/<queryName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Selected Attributes|`selectedAttributes`|`string`|no|Comma-separated list of attributes, in uppercase letters, which specifies the attributes that the query retrieves. If no attributes are specified, all the attributes that are defined on the query are returned.|
|Interaction Filter|`interactionFilter`|`list`<ul><li>``</li><li>`CREATE`</li></ul>|no|Name of a predefined user interaction|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Sort Attributes|`sortAttributes`|`string`|no|Comma-separated list of sort criteria applied to the list of returned process instance entities. Each list entry has the form attribute [ASC|DESC]. ASC (ascending) is the default.|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used.|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If a number is not specified, the default size defined for the query will be used.|

---

### Task Template Query Entity List Count

>Retrieves the number of task template entities in a query meeting specified criteria

**Path**

    /rest/bpm/wle/v1/taskTemplates/query/<queryName>/count

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Query Name|`queryName`|`string`|yes|Name of the saved query|
|Interaction Filter|`interactionFilter`|`list`<ul><li>``</li><li>`CREATE`</li></ul>|no|Name of a predefined user interaction|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If a number is not specified, the default size defined for the query will be used.|

---

## Activity API
Activity related REST API calls
### Available Actions

>Retrieve available actions for the user who is making the request and the activity instance ID.

**Path**

    /rest/bpm/wle/v1/activity/<activityInstanceId>/availableActions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Activity Instance ID|`activityInstanceId`|`string`|yes|The instance ID of the activity, also known as aiid|

---

### Activity Details

>Retrieve details for given activity instance ID

**Path**

    /rest/bpm/wle/v1/activity/<activityInstanceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Activity Instance ID|`activityInstanceId`|`string`|yes|The instance ID of the activity, also known as aiid|

---

### Start Activity

>Starts a manual activity

**Path**

    /rest/bpm/wle/v1/activity/<activityInstanceId>?action=ACTION_START_ACTIVITY

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Activity Instance ID|`activityInstanceId`|`string`|yes|The instance ID of the activity, also known as aiid|

---

### Disable Activity

>Disables an activity

**Path**

    /rest/bpm/wle/v1/activity/<activityInstanceId>?action=ACTION_DISABLE_ACTIVITY

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Activity Instance ID|`activityInstanceId`|`string`|yes|The instance ID of the activity, also known as aiid|

---

### Enable Activity

>Enables a disabled activity

**Path**

    /rest/bpm/wle/v1/activity/<activityInstanceId>?action=ACTION_ENABLE_ACTIVITY

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Activity Instance ID|`activityInstanceId`|`string`|yes|The instance ID of the activity, also known as aiid|

---

### Tasks

>A list of current tasks.

**Path**

    /rest/bpm/wle/v1/activity/<activityInstanceId>/tasks

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Activity Instance ID|`activityInstanceId`|`string`|yes|The instance ID of the activity, also known as aiid|

---

## Search API
Search REST API
### Run Query [deprecated]

>This function is deprecated. Performs a custom search.

**Path**

    /rest/bpm/wle/v1/search/query

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Columns|`columns`|`string`|no|A comma-separated list of column names that the search should return. Valid column names are taskId, instanceId, bpdName, taskSubject, taskArrived, taskStarted, taskFinished, plus any columns that are associated with tracked business data. If this parameter is not specified, then the following columns are returned by default: "taskId", "instanceId", "bpdName", and "taskSubject".|
|Condition|`condition`|`string`|no|Query condition: "<field>|<value>" or "<field>|<op>|<value>"|
|Sort|`sort`|`string`|no|Name of primary sort column|
|Second Sort|`secondSort`|`string`|no|Name of secondary sort column|
|Organization|`organization`|`list`<ul><li>`byInstance`</li><li>`byTask`</li></ul>|no|A string indicating how the results should be organized. Valid values are byTask and byInstance. The default value is byInstance.|
|Size|`size`|`integer`|no|Specifies the maximum number of entities to be returned. If a number is not specified, the default size defined for the query will be used.|
|Offset|`offset`|`integer`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used.|
|Save as Name|`saveAsName`|`string`|no|Saves this custom query as a saved search for this user|
|Perform Query|`run`|`boolean`|no|A flag that indicates whether to perform the query. If this parameter is not specified, the default value of true is used.|
|Share Query with Other Users|`shared`|`boolean`|no|A flag that indicates whether to share the query with other users. If this parameter is not specified, the default value of false is used.|
|Filter By Current User|`filterByCurrentUser`|`boolean`|no|A flag that is used only when an administrative user runs the request; otherwise, it is ignored. This parameter indicates whether the search results should be restricted to those entities that are associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, the default is to perform a filtered search. If the current user is not an administrative user, this parameter is ignored and a filtered search is performed.|

---

### Execute Performance Query

>Performs a custom query against the performance server

**Path**

    /rest/bpm/wle/v1/performance/query

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Filter|`filter`|`string`|yes|A string that represents a filter to be used in the search|
|Columns|`columns`|`string`|no|A comma-separated list of column names that the search should return. Valid column names are taskId, instanceId, bpdName, taskSubject, taskArrived, taskStarted, taskFinished, plus any columns that are associated with tracked business data. If this parameter is not specified, then the following columns are returned by default: "taskId", "instanceId", "bpdName", and "taskSubject".|
|Sort|`sort`|`string`|no|Name of primary sort column|
|Second Sort|`secondSearch`|`string`|no|Name of secondary sort column|
|Condition|`condition`|`string`|no|Query condition: "<field>|<value>" or "<field>|<op>|<value>"|
|Only Rollups|`onlyRollups`|`boolean`|no|Returns only summarized data (true/false)|
|Rollup Rule|`rollupRule`|`string`|no|Formula to use for summarizing the data (AVG, SUM, MIN, MAX, COUNT)|

---

### Run Performance Instance Query

>Retrieves the history information (tracked business and process data) for a BPD instance

**Path**

    /rest/bpm/wle/v1/performance/instance/<instanceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Instance ID|`instanceId`|`instanceid`|yes|You can find the BPD instance ID, also known as a piid, by selecting Task API > Task Details.|

---

### Search Metadata [deprecated]

>This function is deprecated. Retrieves metadata related to saved searches

**Path**

    /rest/bpm/wle/v1/search/meta/<type>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Type|`type`|`list`<ul><li>`column`</li><li>`constraintColumn`</li><li>`taskStatus`</li><li>`businessData`</li><li>`savedSearch`</li><li>`instanceStatus`</li><li>`priority`</li></ul>|yes|The type of metadata to be returned|

---

### Create Saved Search Definition

>Creates the saved search definition for the saved search definition JSON that is passed

**Path**

    /rest/bpm/wle/v1/searches/tasks

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Parameters|`$body`|`json`|yes|A string that contains a JSON expression that has a list of alert definitions to save|

---

### Retrieve Saved Search Definition

>Retrieves the saved search definition for the ID or name that is passed

**Path**

    /rest/bpm/wle/v1/searches/tasks/<idOrName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|ID or Name|`idOrName`|`string`|yes|The ID (numeric) or name (non-numeric) of a saved search definition.|

---

### Update Saved Search Definition

>Update the saved search definition for the ID or name that is passed with the the saved search definition json that is passed

**Path**

    /rest/bpm/wle/v1/searches/tasks/<idOrName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|ID or Name|`idOrName`|`string`|yes|The ID (numeric) or name (non-numeric) of a saved search definition.|
|Parameters|`$body`|`json`|yes|A string that contains a JSON expression that has a saved search definition to save|

---

### Delete Saved Search Definition

>Deletes the saved search definition for the ID or name that is passed

**Path**

    /rest/bpm/wle/v1/searches/tasks/<idOrName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`DELETE`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|ID or Name|`idOrName`|`string`|yes|The ID (numeric) or name (non-numeric) of a saved search definition.|

---

### Retrieve Saved Search Definitions List

>Retrieves a list of saved search definitions that the user has access to

**Path**

    /rest/bpm/wle/v1/searches/tasks

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Saved Search Execution

>The Saved Search Definition can be executed and retrieves a list of task instance entities obtained by using the saved query.

**Path**

    /rest/bpm/wle/v1/tasks

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|savedSearch|`savedSearch`|`string`|no|savedSearch is the ID (numeric) or name (non-numeric) of a saved search definition|
|Fields|`fields`|`string`|no|Comma-separated list of fields to be be retrieved by the query. If no fields are specified, all the fields that are defined in the saved search definition are returned.  Field names must be specified in uppercase letters.|
|Interaction|`interaction`|`list`<ul><li>``</li><li>`claimed`</li><li>`available`</li><li>`claimed_and_available`</li><li>`completed`</li><li>`all`</li></ul>|no|Name of a predefined user interaction|
|Query Filter|`queryFilter`|`string`|no|A query table condition language expression that performs additional filtering on the result set. All attributes defined on the query can be referenced.|
|Search Filter|`searchFilter`|`string`|no|A search expression that is used as input to the task search engine|
|Process Application Name|`processAppName`|`string`|no|Name of the process application|
|Sort|`sort`|`string`|no|Comma-separated list of sort criteria applied to the list of returned process instance entities. Each list entry has the form <xhtml:samp>attribute [ASC|DESC]</xhtml:samp> where ascending is the default. The attributes TAD_DESCRIPTION, STATE and KIND attributes cannot be used within sort criteria.|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If a number is not specified, the default size defined for the query will be used.|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used.|
|Filter By Current User|`filterByCurrentUser`|`boolean`|no|A flag that is used only when an administrative user runs the request; otherwise, it is ignored. This parameter indicates whether the search results should be restricted to those entities that are associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, the default is to perform a filtered search. If the current user is not an administrative user, this parameter is ignored and a filtered search is performed.|
|Calculate Stats|`calcStats`|`boolean`|no|Calculate task statistics|

---

### AdHoc Search Execution

>Runs the ad hoc search query and retrieves a list of task instance entities.

**Path**

    /rest/bpm/wle/v1/tasks

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Parameters|`$body`|`json`|yes|A string that contains a JSON expression that has a list of alert definitions to save|
|Size|`size`|`string`|no|Specifies the maximum number of entities to be returned. If a number is not specified, the default size defined for the query will be used.|
|Offset|`offset`|`string`|no|Specifies the number of entities to be skipped. Offset 0 refers to the first entity from the result set.If this parameter is not specified, the default value of 0 is used.|
|Filter By Current User|`filterByCurrentUser`|`boolean`|no|A flag that is used only when an administrative user runs the request; otherwise, it is ignored. This parameter indicates whether the search results should be restricted to those entities that are associated with the current user. A value of false means that an unfiltered search will be performed, whereas a value of true indicates that the search results will be filtered by the current user. If the current user is an administrative user, the default is to perform a filtered search. If the current user is not an administrative user, this parameter is ignored and a filtered search is performed.|
|Calculate Stats|`calcStats`|`boolean`|no|Calculate task statistics|

---

### Search Definition Meta Data By Type

>A list of meta data filtered by the meta data type that can be used in a saved or ad hoc search definition.

**Path**

    /rest/bpm/wle/v1/searches/tasks/meta/<type>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Type|`type`|`list`<ul><li>`fields`</li><li>`constraintFields`</li><li>`businessDataFields`</li><li>`instanceStatus`</li><li>`taskStatus`</li><li>`priority`</li></ul>|yes|The type of metadata to be returned|

---

### Saved Search Definition User Actions

>The list of available actions that the current user can perform on saved search definitions.

**Path**

    /rest/bpm/wle/v1/searches/actions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

## Business Object API
Business Object API
### Get Definition

>Retrieves the definition of a business object

**Path**

    /rest/bpm/wle/v1/businessobject/<boId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Business Object ID|`boId`|`string`|yes|The business object ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|
|Process Application ID|`processAppId`|`string`|no|The process app ID begins with "2066.xxx". You can find the process app ID by selecting Other > Retrieve Process Applications.|

---

## Organization API
REST API pertaining to users and groups
### Users

>Returns a list of users

**Path**

    /rest/bpm/wle/v1/users

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|yes|`memberships`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Name Filter|`filter`|`string`|no|An optional simple regular expression to be used to filter the list of groups returned, for example "tw_*" will return all groups whose names begin with "tw_"|
|Maximum Results|`maxresult`|`string`|no|The maximum number of users to return (optional)|
|Reassign Task ID|`assignTaskidFilter`|`string`|no|Include only users who can be assigned this task (optional)|
|Collaboration Task ID|`collabTaskidFilter`|`string`|no|Include only users who can collaborate on this task (optional)|
|Include Experts|`includeTaskExperts`|`boolean`|no|Include experts in list of users who can collaborate (optional)|
|Sort|`sort`|`boolean`|no|Sort the list by name (optional)|
|Include Internal Memberships|`includeInternalMemberships`|`boolean`|no|Includes internal memberships when membership information is returned|
|Refresh User|`refreshUser`|`boolean`|no|Refreshes fullname and group memberships of users for member of the group that the ACTION_REFRESH_USER policyAction refers to|
|Include Filter|`includeFilter`|`string`|no|Include only active or inactive users in the result. Valid values are "deactivatedOnly" or "activeOnly".|

---

### User Details

>Returns information about a single user

**Path**

    /rest/bpm/wle/v1/user/<user>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|no|`memberships`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|User Name|`user`|`string`|yes|Name of the user|
|Include Internal Memberships|`includeInternalMemberships`|`boolean`|no|Includes internal memberships when membership information is returned|
|Refresh User|`refreshUser`|`boolean`|no|Refreshes fullname and group memberships of users for member of the group that the ACTION_REFRESH_USER policyAction refers to|
|Include Editable User Preferences|`includeEditableUserPreferences`|`boolean`|no|Includes the list of user preferences that the user is allowed to manage|

---

### User Details by userName

>Returns information about a single user

**Path**

    /rest/bpm/wle/v1/user

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`memberships`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|User Name|`userName`|`string`|yes|Name of the user|
|Include Internal Memberships|`includeInternalMemberships`|`boolean`|no|Includes internal memberships when membership information is returned|
|Refresh User|`refreshUser`|`boolean`|no|Refreshes fullname and group memberships of users for member of the group that the ACTION_REFRESH_USER policyAction refers to|
|Include Editable User Preferences|`includeEditableUserPreferences`|`boolean`|no|Includes the list of user preferences that the user is allowed to manage|

---

### User Details by userID

>Returns information about a single user

**Path**

    /rest/bpm/wle/v1/user

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`memberships`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|User ID|`userID`|`string`|yes|ID of the user|
|Include Internal Memberships|`includeInternalMemberships`|`boolean`|no|Includes internal memberships when membership information is returned|
|Refresh User|`refreshUser`|`boolean`|no|Refreshes fullname and group memberships of users for member of the group that the ACTION_REFRESH_USER policyAction refers to|
|Include Editable User Preferences|`includeEditableUserPreferences`|`boolean`|no|Includes the list of user preferences that the user is allowed to manage|

---

### Current User

>Returns information about the current logged-in user

**Path**

    /rest/bpm/wle/v1/user/current

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes|`memberships`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Include Internal Memberships|`includeInternalMemberships`|`boolean`|no|Includes internal memberships when membership information is returned|
|Include Editable User Preferences|`includeEditableUserPreferences`|`boolean`|no|Includes the list of user preferences that the user is allowed to manage|

---

### Set User Preference

>Sets a user preference value

**Path**

    /rest/bpm/wle/v1/user/<user>?action=setPreference

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|User Name|`user`|`string`|yes|Name of the user|
|Preference Key|`key`|`string`|yes|A string that indicates the user preference to be set. In addition to email, notification, locale, fallback, assignandrun, other custom user attribute names might also be specified, provided that they have been defined in Process Designer.|
|Preference Value|`value`|`string`|no|The new value of the user preference|

---

### Set User Preferences

>Sets user preference values

**Path**

    /rest/bpm/wle/v1/user/<user>?action=setPreferences

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|User Name|`user`|`string`|yes|Name of the user|
|Preference Settings|`prefs`|`string`|yes|A collection of one or more user preferences in the form of a stringified JSON object, for example {"email":"myuser@myhost.com"}|

---

### Groups

>Returns a list of groups

**Path**

    /rest/bpm/wle/v1/groups

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|yes|`members`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Name Filter|`filter`|`string`|no|An optional simple regular expression to be used to filter the list of groups returned, for example "tw_*" will return all groups whose names begin with "tw_"|
|Include Deleted|`includeDeleted`|`boolean`|no|Include deleted groups in result|

---

### Group Details

>Returns information about a single group

**Path**

    /rest/bpm/wle/v1/group/<group>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|yes|`members`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Group Name|`group`|`string`|yes|Name of the group|
|Include Deleted|`includeDeleted`|`boolean`|no|Include deleted groups in result|

---

### Add Group Member

>Add a member to a group

**Path**

    /rest/bpm/wle/v1/group/<groupNameOrID>?action=addMember

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|no|yes|`members`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Group Name|`groupNameOrID`|`string`|yes|Name of the group|
|User|`user`|`string`|no|User name or ID to be added or removed from the group|
|Group|`group`|`string`|no|Group name or ID to be added or removed from the group|

---

### Remove Group Member

>Remove a member from a group

**Path**

    /rest/bpm/wle/v1/group/<groupNameOrID>?action=removeMember

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|no|yes|`members`|


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Group Name|`groupNameOrID`|`string`|yes|Name of the group|
|User|`user`|`string`|no|User name or ID to be added or removed from the group|
|Group|`group`|`string`|no|Group name or ID to be added or removed from the group|

---

### Team Details (by Team ID)

>Returns information about a single team, which is identified by its ID

**Path**

    /rest/bpm/wle/v1/team/<teamId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Team ID|`teamId`|`string`|yes|The ID of the team|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Team Details (by Team Name)

>Returns information about a single team, which is identified by its name

**Path**

    /rest/bpm/wle/v1/team

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Team Name|`name`|`string`|yes|The name of the team|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Global Teams

>Returns a list of global teams.  The default is to return all global teams for which the user has access.

**Path**

    /rest/bpm/wle/v1/globalTeams

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Filter|`filter`|`string`|no|Filter the global teams and include only team names that match the specified filter condition.  The filter is case insensitive.    Example: "hiring*" will return all teams whose names begin with "hiring".|
|Size|`size`|`integer`|no|Specifies the maximum number of entities to be returned. If a number is not specified, the default size defined for the query will be used.|

---

## Process Documentation API
Process Documentation REST API
### Assets

>Returns a list of assets found in a snapshot

**Path**

    /rest/bpm/wle/v1/assets

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Application ID|`processAppId`|`string`|no|The process app ID begins with "2066.xxx". You can find the process app ID by selecting Other > Retrieve Process Applications.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Asset Comparison

>Returns a list of assets with comparison information

**Path**

    /rest/bpm/wle/v1/assets/compare

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Source Snapshot ID|`srcSnapshotId`|`string`|no|The snapshot ID of the comparison source|
|Source Branch ID|`srcBranchId`|`string`|no|The branch ID of the comparison source|
|Target Snapshot ID|`destSnapshotId`|`string`|no|The snapshot ID of the comparison target|
|Target Branch ID|`destBranchId`|`string`|no|The branch ID of the comparison target|

---

### Snapshots in a Project

>Returns a list of snapshots in a project

**Path**

    /rest/bpm/wle/v1/project/<projectId>/snapshots

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Project ID|`projectId`|`string`|yes|The Project ID is the same as the process application ID. It begins with "2066.xxx" and can be found in in this tool by Other > Retrieve Process Applications.|

---

### Branches in a project

>Returns a list of branches in a project

**Path**

    /rest/bpm/wle/v1/project/<projectId>/branches

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Project ID|`projectId`|`string`|yes|The Project ID is the same as the process application ID. It begins with "2066.xxx" and can be found in in this tool by Other > Retrieve Process Applications.|

---

### Retrieves REST Application Adapter for IBM Worklight

>Retrieves the IBM BPM REST API application adapter for IBM Worklight

**Path**

    /rest/bpm/wle/v1/project/<projectId>/adapter/worklight

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Project ID|`projectId`|`string`|yes|The Project ID is the same as the process application ID. It begins with "2066.xxx" and can be found in in this tool by Other > Retrieve Process Applications.|
|Adapter Name|`adapterName`|`string`|no|Name of the adapter|

---

### Snapshots in a branch

>Returns a list of snapshots in a branch

**Path**

    /rest/bpm/wle/v1/branch/<branchId>/snapshots

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Branch ID|`branchId`|`string`|yes|The branch ID. Begins with "2063.xxx..."|

---

### Snapshot change history

>Returns the change history for a snapshot

**Path**

    /rest/bpm/wle/v1/snapshot/<snapshotId>/changehistory

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Snapshot ID|`snapshotId`|`string`|yes|Snapshot ID for a particular process. Begins with "2064.xxx...."|

---

### Delta Changes Between Snapshots

>Returns a list of the delta changes between two snapshots

**Path**

    /rest/bpm/wle/v1/snapshot/comparehistory

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Snapshot ID (1)|`snapshotId1`|`string`|yes|The Snapshot ID (1). Starts with "2064.xxx...."|
|Branch ID (1)|`branchId1`|`string`|no|The Branch ID (1). Starts with "2063.xxx....". It is required when snapshotId1 is "tip".|
|Snapshot ID (2)|`snapshotId2`|`string`|yes|The Snapshot ID (2). Starts with "2064.xxx...."|
|Branch ID (2)|`branchId2`|`string`|no|The branch ID (2). Starts with "2063.xxx....". It is required when snapshotId2 is "tip".|

---

### Retrieves REST Application Adapter for IBM Worklight

>Retrieves the IBM BPM REST API application adapter for IBM Worklight

**Path**

    /rest/bpm/wle/v1/snapshot/<snapshotId>/adapter/worklight

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Snapshot ID|`snapshotId`|`string`|yes|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Adapter Name|`adapterName`|`string`|no|Name of the adapter|

---

### Process App Settings

>Retrieves process app settings

**Path**

    /rest/bpm/wle/v1/processAppSettings

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|
|Process Application ID|`processAppId`|`string`|no|The process app ID begins with "2066.xxx". You can find the process app ID by selecting Other > Retrieve Process Applications.|
|Recurse Dependencies|`recurse`|`boolean`|no|Whether to recursively display process app dependencies|

---

### Process Visual Model

>Retrieves the process visual model for a BPD

**Path**

    /rest/bpm/wle/v1/visual/processModel/<bpdId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|BPD ID|`bpdId`|`string`|yes|Business process definition ID. You can use the "v1/exposed/process" API to retrieve the list of business process definitions (BPDs) that are available to the user.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|
|Project ID|`projectId`|`string`|no|The Project ID is the same as the process application ID. It begins with "2066.xxx" and can be found in in this tool by Other > Retrieve Process Applications.|

---

### Process Instances Visual Model

>Retrieves the process visual models for BPD instances

**Path**

    /rest/bpm/wle/v1/visual/processModel/instances

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|BPD Instance IDs|`instanceIds`|`string`|yes|The array of BPD instance IDs, such as [3,4]|
|BPD ID|`bpdId`|`string`|no|Business process definition ID. You can use the "v1/exposed/process" API to retrieve the list of business process definitions (BPDs) that are available to the user.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Service Visual Model

>Retrieves the service visual model

**Path**

    /rest/bpm/wle/v1/visual/serviceModel/<serviceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service ID|`serviceId`|`string`|yes|The service ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|
|Project ID|`projectId`|`string`|no|The Project ID is the same as the process application ID. It begins with "2066.xxx" and can be found in in this tool by Other > Retrieve Process Applications.|

---

### Advanced Integration Service

>Retrieve service model of the Advanced Integration service

**Path**

    /rest/bpm/wle/v1/SCAServiceModel/<serviceId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service ID|`serviceId`|`string`|yes|The service ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Team

>Retrieves the details of a team

**Path**

    /rest/bpm/wle/v1/participantGroup/<participantGroupId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Participant Group ID|`participantGroupId`|`string`|yes|The participant group ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|
|Process Application ID|`processAppId`|`string`|no|The process app ID begins with "2066.xxx". You can find the process app ID by selecting Other > Retrieve Process Applications.|

---

### Exposed Process Value

>Retrieves the details of an exposed process value

**Path**

    /rest/bpm/wle/v1/epv/<epvId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Exposed Process Value ID|`epvId`|`string`|yes|The exposed process value ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Tracking Group

>Retrieve the details of a tracking group

**Path**

    /rest/bpm/wle/v1/trackinggroup/<tgId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Tracking Group ID|`tgId`|`string`|yes|You can find the Tracking Group ID, or tgId, from the response of selecting Process Documentation API > Assets.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Timing Interval

>Retrieves the details of a timing interval

**Path**

    /rest/bpm/wle/v1/timinginterval/<timingIntervalId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Timing Interval ID|`timingIntervalId`|`string`|yes|The timing interval ID. This is a unique value that is system generated for each type of timing interval. See the TIMINGINTERVALS view in the BPD for a mapping from a name to the TIMING_INTERVAL_ID value.|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Undercover Agent

>Retrieves the details of an undercover agent

**Path**

    /rest/bpm/wle/v1/uca/<ucaId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Undercover Agent ID|`ucaId`|`string`|yes|The undercover agent ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Web Service

>Retrieves the details of a web service

**Path**

    /rest/bpm/wle/v1/webservice/<wsId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Web Service ID or Name|`wsId`|`string`|yes|The web service ID or name. A web service ID starts with "7." followed by a much longer string of characters. (i.e. 7.82145699-78e7-43d0-9cae-2bb0c715b8c7)|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

### Service Level Agreement

>Retrieves the details of a service level agreement

**Path**

    /rest/bpm/wle/v1/sla/<slaId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Service Level Agreement ID|`slaId`|`string`|yes|The service level agreement ID|
|Snapshot ID|`snapshotId`|`string`|no|Snapshot ID for a particular process. Begins with "2064.xxx...."|
|Branch ID|`branchId`|`string`|no|The branch ID. Begins with "2063.xxx..."|

---

## Other
Other REST API Calls
### Retrieve System Details

>Retrieves details about the BPM server installation

**Path**

    /rest/bpm/wle/v1/systems

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Retrieve REST generic adapter for IBM Worklight

>Retrieves the generic BPM REST API adapter for the IBM Worklight product

**Path**

    /rest/bpm/wle/v1/systems/adapter/worklight

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Retrieve Resource Environment Providers

>Retrieves all available resource environment providers

**Path**

    /rest/bpm/wle/v1/system/rep

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Retrieve Resource Environment Provider Properties

>Retrieves properties from a specified resource environment provider

**Path**

    /rest/bpm/wle/v1/system/rep/<providerName>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Resource Environment Provider Name|`providerName`|`string`|yes|The name of the resource environment provider|
|Resource Environment Provider Properties|`properties`|`string`|no|JSON array of property names, for example ["prop1", "prop2"]|

---

### Retrieve System Environment Variable

>Retrieves system environment variable

**Path**

    /rest/bpm/wle/v1/system/env/variable

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Process Application Acronym|`processAppAcronym`|`string`|yes|The process application acronym. You can find the process app acronym by selecting Other > Retrieve Process Applications.|
|Variable Name|`name`|`string`|yes|Variable Name|

---

### Retrieve Process Applications

>Retrieves the available process applications

**Path**

    /rest/bpm/wle/v1/processApps

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Retrieve Toolkits

>Retrieves the available toolkits

**Path**

    /rest/bpm/wle/v1/toolkit

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


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
|Generate Advanced Integration Services|`genAIS`|`boolean`|no|Creates Advanced Integration services for unimplemented services|
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
|Generate Advanced Integration Services|`genAIS`|`boolean`|no|Creates Advanced Integration services for unimplemented services|
|Document File|`data`|`file`|yes|File path of the document|

---

### Exposed Scoreboards

>Retrieves exposed scoreboards

**Path**

    /rest/bpm/wle/v1/exposed/scoreboard

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


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
|`GET`|yes|yes||


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
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Include Service Subtypes|`includeServiceSubtypes`|`string`|no|A comma-separated list of one or more service subtypes to be included in the result set. If service subtypes are not specified, all service subtypes are included.|
|Exclude Referenced from Toolkit|`excludeReferencedFromToolkit`|`string`|no|Comma-separated list of types or service subtypes that should be excluded from referenced toolkits.|
|Exclude Process Start URL|`excludeProcessStartUrl`|`boolean`|no|When true, the process start URL will not be returned.|

---

### Retrieve Alert Definitions

>Retrieves the alert definitions that are associated with the categories specified

**Path**

    /rest/bpm/wle/v1/system/alertDefinitions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Categories|`categories`|`string`|no|A comma-separated list of categories that indicate which alert definitions to retrieve|

---

### Save Alert Definitions

>Saves the list of alert definitions in the database

**Path**

    /rest/bpm/wle/v1/system/alertDefinitions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `POST`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Parameters|`$body`|`json`|yes|A string that contains a JSON expression that has a list of alert definitions to save|
|Import mode|`importMode`|`boolean`|no|Save alert definitions in import mode without validating that the associated artifacts exist. When this optional parameter is set to true, the system also ignores the ID property to prevent the imported alert definitions from overwriting existing alert definitions with the same ID. By default the import mode is set to false.|

---

### Delete Alert Definition

>Deletes the list of alert definitions specified

**Path**

    /rest/bpm/wle/v1/system/alertDefinitions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`DELETE`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Alert Definition IDs|`ids`|`string`|no|A comma-separated list of alert definition IDs to check|

---

### Retrieve Alert Definitions Status

>Returns the current run time values for the list of alert definitions specified, including the actual values and whether the conditions were met

**Path**

    /rest/bpm/wle/v1/system/alertDefinitions/status

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Alert Definition IDs|`ids`|`string`|no|A comma-separated list of alert definition IDs to check|

---

## Social API
Social REST API
### Retrieve Instance Stream

>Retrieves the activity stream for a specific BPD instance

**Path**

    /rest/bpm/wle/v1/social/instance/<instanceId>/stream

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance ID|`instanceId`|`string`|yes|The instance ID or BPD instance ID, also known as a piid. You can find this ID by selecting Task API > Task Details.|
|Sort Order|`sort`|`string`|no|The sort order. Choose asc for ascending or desc for descending. The default option is desc.|
|Page|`page`|`string`|no|The page of items to return. The default is no paging. Pages start at 1. Using 0 disables paging.|
|Page Size|`pagesize`|`string`|no|The number of items to return on a page. The default is 10.|
|Since|`since`|`string`|no|A filter for returning items available only since this date/time. The format is year-month-day-time, such as 2010-10-10T00:00:00.|

---

### Retrieve Mentions

>Retrieves a stream of items in which the current user was mentioned

**Path**

    /rest/bpm/wle/v1/social/instances/mentions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Sort Order|`sort`|`string`|no|The sort order. Choose asc for ascending or desc for descending. The default option is desc.|
|Page|`page`|`string`|no|The page of items to return. The default is no paging. Pages start at 1. Using 0 disables paging.|
|Page Size|`pagesize`|`string`|no|The number of items to return on a page. The default is 10.|
|Since|`since`|`string`|no|A filter for returning items available only since this date/time. The format is year-month-day-time, such as 2010-10-10T00:00:00.|

---

### Delete Mentions

>Deletes a mentioned item

**Path**

    /rest/bpm/wle/v1/social/task/<taskId>/mentions

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`DELETE`|yes|yes||


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
|`DELETE`|yes|yes||


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
|`GET`|yes|yes||


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
|`GET`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance ID|`instanceId`|`string`|yes|The instance ID or BPD instance ID, also known as a piid. You can find this ID by selecting Task API > Task Details.|

---

### Start Following Instance

>Allows user to start following a specific BPD instance

**Path**

    /rest/bpm/wle/v1/social/instance/<instanceId>/following

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance ID|`instanceId`|`string`|yes|The instance ID or BPD instance ID, also known as a piid. You can find this ID by selecting Task API > Task Details.|

---

### Stop Following Instance

>Allows user to stop following a specific BPD instance

**Path**

    /rest/bpm/wle/v1/social/instance/<instanceId>/following

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`DELETE`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Instance ID|`instanceId`|`string`|yes|The instance ID or BPD instance ID, also known as a piid. You can find this ID by selecting Task API > Task Details.|

---

### Retrieve Task Stream

>Retrieves the activity stream for the BPD instance associated with a given task

**Path**

    /rest/bpm/wle/v1/social/task/<taskId>/stream

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Task ID|`taskId`|`string`|yes|Task ID, the unique integer ID of the task|
|Sort Order|`sort`|`string`|no|The sort order. Choose asc for ascending or desc for descending. The default option is desc.|
|Page|`page`|`string`|no|The page of items to return. The default is no paging. Pages start at 1. Using 0 disables paging.|
|Page Size|`pagesize`|`string`|no|The number of items to return on a page. The default is 10.|
|Since|`since`|`string`|no|A filter for returning items available only since this date/time. The format is year-month-day-time, such as 2010-10-10T00:00:00.|

---

### Post Threaded Comment

>Allows posting a threaded comment to an existing comment or task

**Path**

    /rest/bpm/wle/v1/social/task/<taskId>/comment

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|yes||


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
|`GET`|no|yes||


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
|`POST`|no|yes||


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
|`DELETE`|no|yes||


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
|`GET`|no|yes||


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
|`GET`|yes|yes|`groupDetails`|


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
|`GET`|no|yes||


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
|`GET`|no|yes||


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
|`DELETE`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

### Collaboration System Integration Details

>Retrieves the connection information for a defined collaboration system, such as IBM Sametime or IBM Connections

**Path**

    /rest/bpm/wle/v1/social/system/integrations

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`GET`|no|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |

---

## Event Handling API
Event Handling REST API
### Send Event

>Sends an ECM event to IBM Business Process Manager

**Path**

    /rest/bpm/wle/v1/event/ecm?

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`POST`|no|no||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Event Source ID|`eventSourceId`|`string`|yes|ID of the ECM server repository sending the event.|
|Object Type ID|`objectTypeId`|`string`|yes|ID of the object type of the object that the event occurred on|
|Event Type|`eventType`|`list`<ul><li>`CheckOutCanceled`</li><li>`CheckedIn`</li><li>`CheckedOut`</li><li>`ClassChanged`</li><li>`ClassifyCompleted`</li><li>`Created`</li><li>`Deleted`</li><li>`Filed`</li><li>`Frozen`</li><li>`Locked`</li><li>`PublishCompleted`</li><li>`PublishRequested`</li><li>`SecurityUpdated`</li><li>`StateChanged`</li><li>`Unfiled`</li><li>`Unlocked`</li><li>`Updated`</li><li>`VersionDemoted`</li><li>`VersionPromoted`</li></ul>|yes|Type of the event|
|Object ID|`objectId`|`string`|yes|ID of the object instance that the event occurred on|
|Related Object Type ID|`relatedObjectTypeId`|`string`|no|ID of the object type of a related object, for example, the object filed into a folder. If provided, the parameter 'relatedObjectId' also has to be provided.|
|Related Object ID|`relatedObjectId`|`string`|no|ID of a related object, for example, the object filed into a folder. If provided, the parameter 'relatedObjectTypeId' also has to be provided.|

---

## Relationship API
Relationship related REST API
### Update or Remove Relationship 

>Updates relationship properties, or removes a relationship between two instances.

**Path**

    /rest/bpm/wle/v1/relationship/<relationshipId>

|Methods|Secure|Public|Parts|
|:--- |:---:|:---:|:--- |
|`PUT`, `DELETE`|yes|yes||


**Options**

|Name|Var|Type|Required?|Description|
|:--- | --- |:--- |:---:|:--- |
|Relationship ID|`relationshipId`|`string`|yes|The ID of the relationship.|
|Description|`description`|`string`|no|The new description for the relationship.|

---

