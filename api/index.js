/**
 * Top level access to all the methods available on recent IBM BPM versions
 *
 * Below this block is a check list of all all the endpoints and if they've been done or not.
 *
 *
 */
module.exports.process = require('./process')
module.exports.remote = require('./remote')
module.exports.service = require('./service')
module.exports.task = require('./task')

/*
Status

Process API
		GET          Retrieve Model                                               /processModel/<bpdId>?
		GET          External Activity Model                                      /externalactivity/<externalActivityId>/model
done	POST         Start Process                                                /process?action=start
done	GET          Current State                                                /process/<instanceId>
		PUT          Evaluate JavaScript                                          /process/<instanceId>?action=js
		PUT          Update Due Date                                              /process/<instanceId>?action=update
		PUT          Suspend Process                                              /process/<instanceId>?action=suspend
		PUT          Resume Process                                               /process/<instanceId>?action=resume
		PUT          Retry Process                                                /process/<instanceId>?action=retry
		POST         Terminate Process                                            /process/<instanceId>?action=terminate
		DELETE       Delete Process                                               /process/<instanceId>?action=delete
		PUT|POST     Process Bulk Operation                                       /process/bulk
		PUT|POST     Instance Error Details                                       /process/errors
		PUT          Run Ad Hoc Event                                             /process/<instanceId>?action=adhoc
		POST         Delete Token                                                 /process/<instanceId>?action=deleteToken&tokenId=<tokenId>&resume=<resume>
		POST         Move Token                                                   /process/<instanceId>?action=moveToken&tokenId=<tokenId>&target=<target>&resume=<resume>
		POST         Add Comment                                                  /process/<instanceId>?action=comment
		POST         Add Document                                                 /process/<instanceId>?action=addDocument
		POST|PUT     Update Document                                              /process/<instanceId>?action=updateDocument
		POST|DELETE  Delete Document                                              /process/<instanceId>?action=deleteDocument
		GET          Task Summary                                                 /process/<instanceId>/taskSummary/<status>
		GET          Process Queries                                              /processes/queries
		GET          Process Query Attributes                                     /processes/query/<queryName>/attributes
		GET          Process Query Entity List                                    /processes/query/<queryName>
		GET          Process Query Entity List Count                              /processes/query/<queryName>/count
		POST         Fire Timer                                                   /process/<instanceId>?action=fireTimer
		POST         Send Message                                                 /process?action=sendMessage
		GET          Currently Running Instances                                  /process/currentlyExecuting
		GET          Exposed Processes                                            /exposed/process
		GET          Show Process Actions                                         /process/<instanceId>/actions
		GET          Process Actions                                              /process/actions
		GET          Bulk Instance Details                                        /process?action=getdetails
		GET          Ad Hoc Activities                                            /process/<instanceId>/adHocActivities
		GET          Process Instances Status Overview                            /processes/status/overview
		GET          Process Instances Search                                     /processes/search
		PUT          Update Instance Variable                                     /process/<instanceId>/variable/<varName>
		PUT          Update Instance Variables                                    /process/<instanceId>/variables
		PUT|POST     Bulk Action with Search Filters                              /process/bulkWithFilters
		GET          Get Dependent Process                                        /process/<instanceId>/dependentProcess
		GET          Get Depended on Processes                                    /process/<instanceId>/dependedOnProcesses
		GET          Get Related Processes                                        /process/<instanceId>/relatedProcesses
		GET          Get Process Relationships                                    /process/<instanceId>/relationships
		POST|DELETE  Create or Remove Process Instance Relationship               /process/<instanceId>/relationship

Service API
		GET          Retrieve Model                                               /serviceModel/<serviceId>
done	POST         Start Service                                                /service/<serviceId>?action=start
		PUT          Resume Service                                               /service/<instanceId>?action=<action>
		PUT          Evaluate JavaScript                                          /service/<instanceId>?action=js
		GET          Get Data                                                     /service/<instanceId>?action=getData
		PUT          Set Data                                                     /service/<instanceId>?action=setData
		PUT          Stop Service                                                 /service/<instanceId>?action=stop
		GET          Currently Running                                            /service/currentlyRunning
		GET          Exposed Services                                             /exposed/service

Task API
		GET          Task Details                                                 /task/<taskId>
		GET          Get Data                                                     /task/<taskId>?action=getData
		PUT          Set Data                                                     /task/<taskId>?action=setData
		GET          Bulk Task Details                                            /task?action=getdetails
		PUT          Start Task                                                   /task/<taskId>?action=start
		PUT          Assign Task To User                                          /task/<taskId>?action=assign
		PUT          Assign Task To Group                                         /task/<taskId>?action=assign
		PUT          Assign Task To Me                                            /task/<taskId>?action=assign&toMe=true
		PUT          Assign Task Back                                             /task/<taskId>?action=assign&back=true
		PUT          Update Due Date                                              /task/<taskId>?action=update
		PUT          Update Priority                                              /task/<taskId>?action=update
		PUT          Finish Task                                                  /task/<taskId>?action=finish
		PUT          Cancel Task                                                  /task/<taskId>?action=cancel
		GET          Task Client Settings                                         /task/<taskId>/clientSettings/<type>
		GET          Task Actions                                                 /task/actions
		GET          Task Queries                                                 /tasks/queries
		GET          Task Query Attributes                                        /tasks/query/<queryName>/attributes
		GET          Task Query Entity List                                       /tasks/query/<queryName>
		GET          Task Query Entity List Count                                 /tasks/query/<queryName>/count
		POST         Invite a User for Task Collaboration                         /task/<taskId>?action=invite&user=<user>&message=<message>
		PUT|POST     Get Next                                                     /task?action=getNext&query=<queryName>&queryFilter=<queryFilter>&sortAttributes=<sortAttributes>
		PUT|POST     Bulk Claim Tasks                                             /task?action=claim
		PUT|POST     Bulk Cancel Tasks                                            /task?action=cancel

Task Template API
		GET          Task Template Details                                        /taskTemplate/<templateId>
		GET          Task Template Client Settings                                /taskTemplate/<templateId>/clientSettings/<type>
		GET          Task Template Queries                                        /taskTemplates/queries
		GET          Task Template Query Attributes                               /taskTemplates/query/<queryName>/attributes
		GET          Task Template Query Entity List                              /taskTemplates/query/<queryName>
		GET          Task Template Query Entity List Count                        /taskTemplates/query/<queryName>/count

Activity API
		GET          Available Actions                                            /activity/<activityInstanceId>/availableActions
		GET          Activity Details                                             /activity/<activityInstanceId>
		PUT          Start Activity                                               /activity/<activityInstanceId>?action=ACTION_START_ACTIVITY
		PUT          Disable Activity                                             /activity/<activityInstanceId>?action=ACTION_DISABLE_ACTIVITY
		PUT          Enable Activity                                              /activity/<activityInstanceId>?action=ACTION_ENABLE_ACTIVITY
		GET          Tasks                                                        /activity/<activityInstanceId>/tasks

Search API
		PUT          Run Query                                                    /search/query
		GET          Execute Performance Query                                    /performance/query
		GET          Run Performance Instance Query                               /performance/instance/<instanceId>
		GET          Search Metadata                                              /search/meta/<type>
		POST         Create Saved Search Definition                               /searches/tasks
		GET          Retrieve Saved Search Definition                             /searches/tasks/<idOrName>
		PUT          Update Saved Search Definition                               /searches/tasks/<idOrName>
		DELETE       Delete Saved Search Definition                               /searches/tasks/<idOrName>
		GET          Retrieve Saved Search Definitions List                       /searches/tasks
		GET          Saved Search Execution                                       /tasks
		PUT          AdHoc Search Execution                                       /tasks
		GET          Search Definition Meta Data By Type                          /searches/tasks/meta/<type>
		GET          Saved Search Definition User Actions                         /searches/actions

Business Object API
		GET          Get Definition                                               /businessobject/<boId>

Organization API
		GET          Users                                                        /users
		GET          User Details                                                 /user/<user>
		GET          User Details by userName                                     /user
		GET          User Details by userID                                       /user
		GET          Current User                                                 /user/current
		PUT|POST     Set User Preference                                          /user/<user>?action=setPreference
		PUT|POST     Set User Preferences                                         /user/<user>?action=setPreferences
		GET          Groups                                                       /groups
		GET          Group Details                                                /group/<group>
		PUT|POST     Add Group Member                                             /group/<groupNameOrID>?action=addMember
		PUT|POST     Remove Group Member                                          /group/<groupNameOrID>?action=removeMember
		GET          Team Details (by Team ID)                                    /team/<teamId>
		GET          Team Details (by Team Name)                                  /team
		GET          Global Teams                                                 /globalTeams

Process Documentation API
		GET          Assets                                                       /assets
		GET          Asset Comparison                                             /assets/compare
		GET          Snapshots in a Project                                       /project/<projectId>/snapshots
		GET          Branches in a project                                        /project/<projectId>/branches
		GET          Retrieves REST Application Adapter for IBM Worklight         /project/<projectId>/adapter/worklight
		GET          Snapshots in a branch                                        /branch/<branchId>/snapshots
		GET          Snapshot change history                                      /snapshot/<snapshotId>/changehistory
		GET          Delta Changes Between Snapshots                              /snapshot/comparehistory
		GET          Retrieves REST Application Adapter for IBM Worklight         /snapshot/<snapshotId>/adapter/worklight
		GET          Process App Settings                                         /processAppSettings
		GET          Process Visual Model                                         /visual/processModel/<bpdId>
		GET          Process Instances Visual Model                               /visual/processModel/instances
		GET          Service Visual Model                                         /visual/serviceModel/<serviceId>
		GET          Advanced Integration Service                                 /SCAServiceModel/<serviceId>
		GET          Team                                                         /participantGroup/<participantGroupId>
		GET          Exposed Process Value                                        /epv/<epvId>
		GET          Tracking Group                                               /trackinggroup/<tgId>
		GET          Timing Interval                                              /timinginterval/<timingIntervalId>
		GET          Undercover Agent                                             /uca/<ucaId>
		GET          Web Service                                                  /webservice/<wsId>
		GET          Service Level Agreement                                      /sla/<slaId>

Other
		GET          Retrieve System Details                                      /systems
		GET          Retrieve REST generic adapter for IBM Worklight              /systems/adapter/worklight
		GET          Retrieve Resource Environment Providers                      /system/rep
		GET          Retrieve Resource Environment Provider Properties            /system/rep/<providerName>
		GET          Retrieve System Environment Variable                         /system/env/variable
		GET          Retrieve Process Applications                                /processApps
		GET          Retrieve Toolkits                                            /toolkit
		POST         Create Process Application from BPMN Archive                 /processApps
		POST         Create Toolkit from BPMN Archive                             /toolkit
		GET          Exposed Scoreboards                                          /exposed/scoreboard
		GET          Exposed Reports                                              /exposed/report
		GET          Exposed Items (All)                                          /exposed
		GET          Retrieve Alert Definitions                                   /system/alertDefinitions
		PUT|POST     Save Alert Definitions                                       /system/alertDefinitions
		DELETE       Delete Alert Definition                                      /system/alertDefinitions
		GET          Retrieve Alert Definitions Status                            /system/alertDefinitions/status

Social API
		GET          Retrieve Instance Stream                                     /social/instance/<instanceId>/stream
		GET          Retrieve Mentions                                            /social/instances/mentions
		DELETE       Delete Mentions                                              /social/task/<taskId>/mentions
		DELETE       Delete All Mentions                                          /social/task/mentions/all
		GET          Retrieve All Following                                       /social/instances/following
		GET          Retrieve Following Instance                                  /social/instance/<instanceId>/following
		POST         Start Following Instance                                     /social/instance/<instanceId>/following
		DELETE       Stop Following Instance                                      /social/instance/<instanceId>/following
		GET          Retrieve Task Stream                                         /social/task/<taskId>/stream
		POST         Post Threaded Comment                                        /social/task/<taskId>/comment
		GET          Retrieve Following Task                                      /social/task/<taskId>/following
		POST         Start Following Task                                         /social/task/<taskId>/following
		DELETE       Stop Following Task                                          /social/task/<taskId>/following
		GET          Retrieve User''s Expert Data                                 /social/task/<taskId>/userdata
		GET          Task Experts                                                 /social/task/<taskId>/experts
		GET          Retrieve User Avatar                                         /avatar/<user>
		GET          Retrieve Avatar                                              /avatar/current
		DELETE       Delete Avatar                                                /avatar/current
		GET          Collaboration System Integration Details                     /social/system/integrations

Event Handling API
		POST         Send Event                                                   /event/ecm?

Relationship API
		PUT|DELETE   Update or Remove Relationship                                /relationship/<relationshipId>

 */
