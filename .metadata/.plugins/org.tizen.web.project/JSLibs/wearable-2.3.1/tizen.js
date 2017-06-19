/**
 * The AlarmRelative interface provides the relative alarm, which occurs at a fixed interval in future.
          <p>
This alarm triggers after a duration mentioned in the <em>delay</em> attribute from the moment the alarm is added.
If a <em>period</em> is provided, the alarm keeps triggering for the given interval.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AlarmRelative}
 */
function AlarmRelative() {};
AlarmRelative.prototype = new Alarm();

/**
 * The AlarmAbsolute interface provides an absolute alarm, which triggers at a specified absolute date.
          <p>
If a <em>period</em> is provided, the alarm keeps triggering for the given interval. If the <em>daysOfTheWeek</em> array is not empty, the alarm triggers every week, for the given days, at the time defined by the <em>date</em> attribute.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AlarmAbsolute}
 */
function AlarmAbsolute() {};
AlarmAbsolute.prototype = new Alarm();

/**
 * The Alarm interface is an abstract interface for alarm types.
 *
 * @super Object
 * @constructor
 * @return {Alarm}
 */
function Alarm() {};
Alarm.prototype = new Object();

/**
 * The AlarmManager interface provides methods to manage alarms.
 *
 * @super Object
 * @constructor
 * @return {AlarmManager}
 */
function AlarmManager() {};
AlarmManager.prototype = new Object();

/**
 * The AlarmManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the functionality of the Alarm API.
 *
 * @super Object
 * @constructor
 * @return {AlarmManagerObject}
 */
function AlarmManagerObject() {};
AlarmManagerObject.prototype = new Object();

/**
 * An attribute to store the difference in time (in seconds) between when an alarm is added and when it is triggered.
 *
 * @type Number
 */
AlarmRelative.prototype.delay = new Number();

/**
 * An attribute to store the duration in seconds between each trigger of an alarm. By default, this attribute is set to , indicating that this alarm does not repeat.
 *
 * @type Number
 */
AlarmRelative.prototype.period = new Number();

/**
 * Returns the duration in seconds before the next alarm is triggered.
            <p>
If the alarm has expired, this method returns <var>null</var>.
            </p>
           
 *
 * @type Number
 * @memberOf AlarmRelative
 * @returns {Number}
 */
AlarmRelative.prototype.getRemainingSeconds = function(){ var ret = new Number(); return ret; };

/**
 * An attribute to store the absolute date/time when the alarm is initially triggered.
 * <p>
This attribute is precise to the second. Milliseconds will be ignored.
            </p>
 *
 * @type Date
 */
AlarmAbsolute.prototype.date = new Date();

/**
 * An attribute to store the duration in seconds between each trigger of the alarm.
 * <p>
By default, this attribute is set to <var>null</var>, indicating that this alarm does not repeat.
The <em>period</em> and <em>daysOfTheWeek</em> attributes are mutually exclusive.
            </p>
 *
 * @type Number
 */
AlarmAbsolute.prototype.period = new Number();

/**
 * An attribute to store the days of the week associated with the recurrence rule.
 * <p>
By default, this attribute is set to an empty array.
The <em>period</em> and <em>daysOfTheWeek</em> attributes are mutually exclusive.
            </p>
 *
 * @type array
 */
AlarmAbsolute.prototype.daysOfTheWeek = new array();

/**
 * Returns the date / time of the next alarm trigger.
            <p>
If the alarm has expired, this method returns <var>null</var>. The returned date is precise to the second.
            </p>
           
 *
 * @type Date
 * @memberOf AlarmAbsolute
 * @returns {Date}
 */
AlarmAbsolute.prototype.getNextScheduledDate = function(){ var ret = new Date(); return ret; };

/**
 * The alarm identifier.
 *
 * @type AlarmId
 */
Alarm.prototype.id = new AlarmId();

/**
 * The period of a minute. It defines the number of seconds per minute.
 *
 * @type Number
 */
AlarmManager.PERIOD_MINUTE = new Number();

/**
 * The period of an hour. It defines the number of seconds per hour.
 *
 * @type Number
 */
AlarmManager.PERIOD_HOUR = new Number();

/**
 * The period of a day. It defines the number of seconds per day.
 *
 * @type Number
 */
AlarmManager.PERIOD_DAY = new Number();

/**
 * The period of a week. It defines the number of seconds in a week.
 *
 * @type Number
 */
AlarmManager.PERIOD_WEEK = new Number();

/**
 * Adds an alarm to the storage.
            <p>
Sets an alarm with the application ID to be run. You should definitely provide the application ID to run
and the <a href=" http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/application_service.htm">application control </a>information if it is necessary. 
For more information about the application control, see <a href="application.html">The Application API</a>.
            </p>
           
 *
 * @param {Alarm} alarm
 * @param {ApplicationId} applicationId
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.add = function(alarm, applicationId, appControl){ return; };

/**
 * Removes an alarm from the storage.
            <p>
If an alarm goes off, it will be removed from the storage automatically.
            </p>
           
 *
 * @param {AlarmId} id
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.remove = function(id){ return; };

/**
 * Removes all alarms added by an application.
            <p>
Because each application has its own alarm storage, this method removes alarms only added by the calling application.
            </p>
           
 *
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.removeAll = function(){ return; };

/**
 * Returns an alarm as per the specified identifier.
 *
 * @param {AlarmId} id
 * @type Alarm
 * @memberOf AlarmManager
 * @returns {Alarm}
 */
AlarmManager.prototype.get = function(id){ var ret = new Alarm(); return ret; };

/**
 * Retrieves all alarms in an application storage.
            <p>
Alarms that have already been triggered are removed automatically from the storage.
            </p>
           
 *
 * @type array
 * @memberOf AlarmManager
 * @returns {array}
 */
AlarmManager.prototype.getAll = function(){ var ret = new array(); return ret; };

/**
 * The Alarm API provides functionality for scheduling the system alarm. It allows you to run other applications and have them perform operations at a specific time. You can schedule an alarm to go off once or to repeat at specific intervals.
 * <p>
Each application has its own individual alarm storage, that is, applications cannot view or edit alarms set by other applications.
        </p>
 * <p>
Once an alarm goes off, it will be removed from the alarm storage automatically.
<em>AlarmManager</em> provides methods to manage alarms such as adding and removing. 
For more information on the Alarm features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/alarm.htm">Alarm Guide</a>.
        </p>
 *
 * @type AlarmManager
 */
AlarmManagerObject.prototype.alarm = new AlarmManager();

/**
 * The Alarm API provides functionality for scheduling the system alarm. It allows you to run other applications and have them perform operations at a specific time. You can schedule an alarm to go off once or to repeat at specific intervals.
 * <p>
Each application has its own individual alarm storage, that is, applications cannot view or edit alarms set by other applications.
        </p>
 * <p>
Once an alarm goes off, it will be removed from the alarm storage automatically.
<em>AlarmManager</em> provides methods to manage alarms such as adding and removing. 
For more information on the Alarm features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/alarm.htm">Alarm Guide</a>.
        </p>
 *
 * @type AlarmManager
 */
Tizen.prototype.alarm = new AlarmManager();

/**
 * This interface defines the current application's information and the basic operations (such as exit or hide) for the current application.
 *
 * @super Object
 * @constructor
 * @return {Application}
 */
function Application() {};
Application.prototype = new Object();

/**
 * This interface defines the certificate information of an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationCertificate}
 */
function ApplicationCertificate() {};
ApplicationCertificate.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the system has finished searching applications that match a specific application control .
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation </em>objects and application control as an input parameter.
It is used in <em>ApplicationManager.findAppControl()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FindAppControlSuccessCallback}
 */
function FindAppControlSuccessCallback() {};
FindAppControlSuccessCallback.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the installed application list is retrieved.
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation </em>objects as an input parameter. It is used in <em>ApplicationManager.getAppsInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformationArraySuccessCallback}
 */
function ApplicationInformationArraySuccessCallback() {};
ApplicationInformationArraySuccessCallback.prototype = new Object();

/**
 * The ApplicationControlDataArrayReplyCallback callback specifies success callbacks that are invoked as a reply from the requested application control within the application control requester.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 <em>onsuccess()</em> - Invoked if the callee application calls <em>RequestedApplicationControl.replyResult()</em>.            </li>
            <li>
 <em>onfailure()</em> - Invoked if the callee application calls <em>RequestedApplicationControl.replyFailure()</em>.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlDataArrayReplyCallback}
 */
function ApplicationControlDataArrayReplyCallback() {};
ApplicationControlDataArrayReplyCallback.prototype = new Object();

/**
 * This interface defines a key/value pair used to pass data between applications through the interface.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlData}
 */
function ApplicationControlData() {};
ApplicationControlData.prototype = new Object();

/**
 * This interface defines the general information available to an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformation}
 */
function ApplicationInformation() {};
ApplicationInformation.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the list of running applications is retrieved.
          <p>
This callback interface specifies a success method with
an array of <em>ApplicationContext </em>objects as an input parameter. It is used in <em>ApplicationManager.getAppsContext()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationContextArraySuccessCallback}
 */
function ApplicationContextArraySuccessCallback() {};
ApplicationContextArraySuccessCallback.prototype = new Object();

/**
 * This interface defines the information available about a running application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationContext}
 */
function ApplicationContext() {};
ApplicationContext.prototype = new Object();

/**
 * This interface defines what is instantiated by the object on the Tizen Platform.
          <p>
The <em>tizen.application </em>object allows access to the Application API's functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationManagerObject}
 */
function ApplicationManagerObject() {};
ApplicationManagerObject.prototype = new Object();

/**
 * The ApplicationManager interface provides methods to retrieve application information, launch, install application, etc.
 *
 * @super Object
 * @constructor
 * @return {ApplicationManager}
 */
function ApplicationManager() {};
ApplicationManager.prototype = new Object();

/**
 * This interface consists of an operation, URI, MIME type, and data. It describes an action to be performed by other applications and is passed to launch other applications. If the system gets the application control request, it finds the corresponding application to be launched with the delivered application control and launches the selected application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControl}
 */
function ApplicationControl() {};
ApplicationControl.prototype = new Object();

/**
 * The ApplicationInformationEventCallback specifies listener for subscribing for notifications of changes in the list of installed applications on a device.
          <p>
This callback interface specifies methods that are invoked when
an application is installed, updated, or uninstalled.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformationEventCallback}
 */
function ApplicationInformationEventCallback() {};
ApplicationInformationEventCallback.prototype = new Object();

/**
 * This interface defines the meta data of an installed application
 *
 * @super Object
 * @constructor
 * @return {ApplicationMetaData}
 */
function ApplicationMetaData() {};
ApplicationMetaData.prototype = new Object();

/**
 * This interface has an application control information requested and passed from another application and is passed to launch other applications. The newly launched application can get the requested application control through the method, and send the results to the calling application through the method after performing the required action requested by the calling application.
 *
 * @super Object
 * @constructor
 * @return {RequestedApplicationControl}
 */
function RequestedApplicationControl() {};
RequestedApplicationControl.prototype = new Object();

/**
 * An attribute to store the application information for the current application.
 *
 * @type ApplicationInformation
 */
Application.prototype.appInfo = new ApplicationInformation();

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
Application.prototype.contextId = new ApplicationContextId();

/**
 * Exits the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.exit = function(){ return; };

/**
 * Hides the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.hide = function(){ return; };

/**
 * Gets the requested application control passed to the current application.
            <p>
Gets the requested application control that contains the application control
passed by the <em>launchAppControl()</em> method from the calling application.
The requested application control contains the reason the application
is launched and what it has to perform. For example, an application
might be launched to display an image on a page by another
application's request. In all of these cases, the application is
responsible for checking the contents of the application control and responding
appropriately when it is launched.
            </p>
           
 *
 * @type RequestedApplicationControl
 * @memberOf Application
 * @returns {RequestedApplicationControl}
 */
Application.prototype.getRequestedAppControl = function(){ var ret = new RequestedApplicationControl(); return ret; };

/**
 * An attribute to store the type of the application certificate
 *
 * @type String
 */
ApplicationCertificate.prototype.type = new String();

/**
 * An attribute to store the value of the application certificate
 *
 * @type String
 */
ApplicationCertificate.prototype.value = new String();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf FindAppControlSuccessCallback
 * @returns {void}
 */
FindAppControlSuccessCallback.prototype.onsuccess = function(informationArray, appControl){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf ApplicationInformationArraySuccessCallback
 * @returns {void}
 */
ApplicationInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * Called when the callee application calls .
 *
 * @param {array} data
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onsuccess = function(data){ return; };

/**
 * Called when the callee application calls .
 *
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onfailure = function(){ return; };

/**
 * An attribute to store the name of a key.
 *
 * @type String
 */
ApplicationControlData.prototype.key = new String();

/**
 * An attribute to store the value associated with a key.
 *
 * @type array
 */
ApplicationControlData.prototype.value = new array();

/**
 * An attribute to store the identifier of an application for application management.
 *
 * @type ApplicationId
 */
ApplicationInformation.prototype.id = new ApplicationId();

/**
 * An attribute to store the name of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.iconPath = new String();

/**
 * An attribute to store the version of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.version = new String();

/**
 * An attribute that determines whether the application information should be shown (such as in menus).
 *
 * @type Boolean
 */
ApplicationInformation.prototype.show = new Boolean();

/**
 * An array of attributes to store the categories that the app belongs to.
 *
 * @type array
 */
ApplicationInformation.prototype.categories = new array();

/**
 * An attribute to store the application install/update time.
 *
 * @type Date
 */
ApplicationInformation.prototype.installDate = new Date();

/**
 * An attribute to store the application size (installed space).
 *
 * @type Number
 */
ApplicationInformation.prototype.size = new Number();

/**
 * An attribute to store the package ID of an application.
 *
 * @type PackageId
 */
ApplicationInformation.prototype.packageId = new PackageId();

/**
 * Called when completes successfully.
 *
 * @param {array} contexts
 * @type void
 * @memberOf ApplicationContextArraySuccessCallback
 * @returns {void}
 */
ApplicationContextArraySuccessCallback.prototype.onsuccess = function(contexts){ return; };

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
ApplicationContext.prototype.id = new ApplicationContextId();

/**
 * An attribute to store the ID of an installed application.
 *
 * @type ApplicationId
 */
ApplicationContext.prototype.appId = new ApplicationId();

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for the current application such as exit or hide.
        </p>
 * <p>
For more information on the Application features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type ApplicationManager
 */
ApplicationManagerObject.prototype.application = new ApplicationManager();

/**
 * Gets the object defining the current application.
 *
 * @type Application
 * @memberOf ApplicationManager
 * @returns {Application}
 */
ApplicationManager.prototype.getCurrentApplication = function(){ var ret = new Application(); return ret; };

/**
 * Kills an application with the specified application context ID.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the context is not found with the specified context ID.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value
or if the specified context ID matches the context ID of the calling application.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextId} contextId
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.kill = function(contextId, successCallback, errorCallback){ return; };

/**
 * Launches an application with the given application ID.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the application is not found with the specified ID.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launch = function(id, successCallback, errorCallback){ return; };

/**
 * Launches an application with the specified application control.
            <p>
An application can launch other applications with the application control,
and get back the results from the launched applications.
            </p>
            <p>
The application control consists of an operation, URI, and MIME type, and describes
the request to be performed by the newly launched application. The
application control is passed to the <em>launchAppControl()</em> method to launch an
application. The system tries to find the proper application
to perform the requested application control, then launches the selected application.
            </p>
            <p>
The application control request is passed to the newly launched application
and it can be accessed by the <em>getRequestedAppControl() </em>method. The passed
application control contains the reason the application has been launched and
information about what the application is doing. The launched application
can send a result to the caller application with the <em>replyResult() </em>method of the
<em>RequestedApplicationControl</em> interface.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the system cannot find the application that matches the specified application control.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
SecurityError - If the application does not have the privilege to call the specified application control operation.              </li>
              <li>
UnknownError: If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ApplicationControlDataArrayReplyCallback} replyCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launchAppControl = function(appControl, id, successCallback, errorCallback, replyCallback){ return; };

/**
 * Finds which applications can be launched with the given application control.
            <p>
An application can get a list of other applications that can be launched with the application control.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {FindAppControlSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.findAppControl = function(appControl, successCallback, errorCallback){ return; };

/**
 * Gets a list of application contexts for applications that are currently running on a device. The information contained for each application corresponds to the application state at the time when the list had been generated.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsContext = function(successCallback, errorCallback){ return; };

/**
 * Gets the application context for the specified application context ID. If the ID is set to or is not set at all, the method returns the application context of the current application. The list of running applications and their application IDs is obtained with .
 *
 * @param {ApplicationContextId} contextId
 * @type ApplicationContext
 * @memberOf ApplicationManager
 * @returns {ApplicationContext}
 */
ApplicationManager.prototype.getAppContext = function(contextId){ var ret = new ApplicationContext(); return ret; };

/**
 * Gets the list of installed applications' information on a device. The information contained on each application corresponds to the application state at the time when the list had been generated.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets application information for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application information for the current application.
The list of installed applications and their application IDs is obtained with <em>getAppsInfo()</em>.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type ApplicationInformation
 * @memberOf ApplicationManager
 * @returns {ApplicationInformation}
 */
ApplicationManager.prototype.getAppInfo = function(id){ var ret = new ApplicationInformation(); return ret; };

/**
 * Gets application certificates for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application certificates for the current application.
            </p>
            <p>
The certificate types are listed below:
            </p>
            <ul>
              <li>
 AUTHOR_ROOT - Author Root Certificate               </li>
              <li>
 AUTHOR_INTERMEDIATE - Author Intermediate Certificate               </li>
              <li>
 AUTHOR_SIGNER - Author Signer Certificate               </li>
              <li>
 DISTRIBUTOR_ROOT - Distributor Root Certificate               </li>
              <li>
 DISTRIBUTOR_INTERMEDIATE - Distributor Intermediate Certificate               </li>
              <li>
 DISTRIBUTOR_SIGNER - Distributor Signer Certificate               </li>
              <li>
 DISTRIBUTOR2_ROOT - Distributor2 Root Certificate               </li>
              <li>
 DISTRIBUTOR2_INTERMEDIATE - Distributor2 Intermediate Certificate               </li>
              <li>
 DISTRIBUTOR2_SIGNER - Distributor2 Signer Certificate               </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @type array
 * @memberOf ApplicationManager
 * @returns {array}
 */
ApplicationManager.prototype.getAppCerts = function(id){ var ret = new array(); return ret; };

/**
 * Gets the URI of the read-only shared directory of an application for a specified application ID.
            <p>
The shared directory is used to export data to other applications.
If the ID is set to <var>null</var> or not set at all, it returns the shared directory URI for the current application.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type String
 * @memberOf ApplicationManager
 * @returns {String}
 */
ApplicationManager.prototype.getAppSharedURI = function(id){ var ret = new String(); return ret; };

/**
 * Gets the application meta data array for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns the application meta data array for the current application.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type array
 * @memberOf ApplicationManager
 * @returns {array}
 */
ApplicationManager.prototype.getAppMetaData = function(id){ var ret = new array(); return ret; };

/**
 * Adds a listener for receiving any notification for changes in the list of installed applications on a device.
            <p>
It installs a callback that is triggered every time a change occurs on
the list of installed applications on a device. This change may
occur due to a new installation, uninstallation, or update of an application.
            </p>
            <p>
When executed, the implementation must immediately return a listener
ID that identifies the listener. After returning the ID, the change
detection operation is started asynchronously.
            </p>
            <p>
The <em>ApplicationInformationEventCallback </em>must be invoked every time a new
application is installed, removed, or updated.
            </p>
            <p>
The change detection must continue until the <em>removeAppInfoEventListener()</em> method is called
with the corresponding listener identifier.
            </p>
           
 *
 * @param {ApplicationInformationEventCallback} eventCallback
 * @type Number
 * @memberOf ApplicationManager
 * @returns {Number}
 */
ApplicationManager.prototype.addAppInfoEventListener = function(eventCallback){ var ret = new Number(); return ret; };

/**
 * Removes the listener to stop receiving notifications for changes on the list of installed applications on a device.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.removeAppInfoEventListener = function(watchId){ return; };

/**
 * An attribute to store the string that defines the action to be performed by an application control.
 *
 * @type String
 */
ApplicationControl.prototype.operation = new String();

/**
 * An attribute to store the URI needed by an application control.
 *
 * @type String
 */
ApplicationControl.prototype.uri = new String();

/**
 * An attribute to store the MIME type of content.
 *
 * @type String
 */
ApplicationControl.prototype.mime = new String();

/**
 * An attribute to store the category of the application to be launched.
 *
 * @type String
 */
ApplicationControl.prototype.category = new String();

/**
 * An array of attributes to store the data needed for an application control.
 *
 * @type array
 */
ApplicationControl.prototype.data = new array();

/**
 * Called when an application is installed.
 *
 * @param {ApplicationInformation} info
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.oninstalled = function(info){ return; };

/**
 * Called when an application is updated.
 *
 * @param {ApplicationInformation} info
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.onupdated = function(info){ return; };

/**
 * Called when an application is uninstalled.
 *
 * @param {ApplicationId} id
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.onuninstalled = function(id){ return; };

/**
 * An attribute to store the key of the application meta data
 *
 * @type String
 */
ApplicationMetaData.prototype.key = new String();

/**
 * An attribute to store the value of the application meta data
 *
 * @type String
 */
ApplicationMetaData.prototype.value = new String();

/**
 * An attribute to store the application control object that describes the caller application's request. It contains the information that the calling application passed to .
 *
 * @type ApplicationControl
 */
RequestedApplicationControl.prototype.appControl = new ApplicationControl();

/**
 * An attribute to store the caller application's ID.
 *
 * @type ApplicationId
 */
RequestedApplicationControl.prototype.callerAppId = new ApplicationId();

/**
 * Sends the results to the caller application.
 *
 * @param {array} data
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyResult = function(data){ return; };

/**
 * Notifies the calling application that the application failed to perform the requested action.
 *
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyFailure = function(){ return; };

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for the current application such as exit or hide.
        </p>
 * <p>
For more information on the Application features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type ApplicationManager
 */
Tizen.prototype.application = new ApplicationManager();

/**
 * The ArchiveManagerObject interface defines what is instantiated in the object.
          <p>
The <em>tizen.archive</em> object allows access to the Archive API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ArchiveManagerObject}
 */
function ArchiveManagerObject() {};
ArchiveManagerObject.prototype = new Object();

/**
 * The ArchiveFile interface provides access to member files of the archive file.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFile}
 */
function ArchiveFile() {};
ArchiveFile.prototype = new Object();

/**
 * The ArchiveFileEntryArraySuccessCallback interface provides a SuccessCallback for the ArchiveFile::getEntries() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntryArraySuccessCallback}
 */
function ArchiveFileEntryArraySuccessCallback() {};
ArchiveFileEntryArraySuccessCallback.prototype = new Object();

/**
 * The ArchiveFileSuccessCallback interface provides a SuccessCallback for the ArchiveManager::open() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileSuccessCallback}
 */
function ArchiveFileSuccessCallback() {};
ArchiveFileSuccessCallback.prototype = new Object();

/**
 * The ArchiveFileEntrySuccessCallback interface provides a SuccessCallback for the ArchiveFile::getEntryByName() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntrySuccessCallback}
 */
function ArchiveFileEntrySuccessCallback() {};
ArchiveFileEntrySuccessCallback.prototype = new Object();

/**
 * The ArchiveManager interface provides methods for global operations related to ArchiveFile.
 *
 * @super Object
 * @constructor
 * @return {ArchiveManager}
 */
function ArchiveManager() {};
ArchiveManager.prototype = new Object();

/**
 * The ArchiveFileEntry interface provides access to ArchiveFile member information and file data.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntry}
 */
function ArchiveFileEntry() {};
ArchiveFileEntry.prototype = new Object();

/**
 * The ArchiveFileProgressCallback interface provides a ProgressCallback for ArchiveFile and ArchiveFileEntry methods.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileProgressCallback}
 */
function ArchiveFileProgressCallback() {};
ArchiveFileProgressCallback.prototype = new Object();

/**
 * The Archive API provides functions to create and manage archive files. You can extract files, add a file to an archive file, and so on.
 * <p>
For more information about how to use Archive API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/archive.htm">Archive Guide</a>.
        </p>
 *
 * @type ArchiveManager
 */
ArchiveManagerObject.prototype.archive = new ArchiveManager();

/**
 * attribute File mode when it is opened.
 *
 * @type FileMode
 */
ArchiveFile.prototype.mode = new FileMode();

/**
 * Size of all the files included in the archive after decompression.
 * <p>
The size is <var>null</var> until the archive is opened.
            </p>
 *
 * @type Number
 */
ArchiveFile.prototype.decompressedSize = new Number();

/**
 * Adds a new member file to .
            <p>
If <em>sourceFile</em> refers to a directory,
the directory and its content will be added to ArchiveFile.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>sourceFile</em> does not exist              </li>
              <li>
IOError: If archiveFile can not be written due the lack of access permission              </li>
              <li>
InvalidModificationError: If the operation results in a name conflict in the archive<br/>i.e. two entries in the archive with the same name (including directory names).              </li>
              <li>
UnknownError: In any case of any other error              </li>
            </ul>
            <p>
Name stored for new entries is constructed from <em>sourceFile</em> according to the
<a href="#ArchiveFileEntryOptions::stripSourceDirectory">stripSourceDirectory</a> and <a href="#ArchiveFileEntryOptions::destination">destination</a> options. Names are constructed as follows:
            </p>
            <table>
              <tr>
                <th>
source file                </th>
                <th>
destination                </th>
                <th>
stripSourceDirectory                </th>
                <th>
resulting entry name                </th>
              </tr>
              <tr>
                <td>
documents/subdir/second/justName.ext                </td>
                <td>
<em>(empty)</em>                </td>
                <td>
<var>false</var>                </td>
                <td>
subdir/second/justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/second/justName.ext                </td>
                <td>
<em>(empty)</em>                </td>
                <td>
<var>true</var>                </td>
                <td>
justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/justName.ext                </td>
                <td>
"report3"                </td>
                <td>
<var>false</var>                </td>
                <td>
report3/subdir/justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/justName.ext                </td>
                <td>
"report3"                </td>
                <td>
<var>true</var>                </td>
                <td>
report3/justName.ext                </td>
              </tr>
            </table>
           
 *
 * @param {FileReference} sourceFile
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {ArchiveFileEntryOptions} options
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.add = function(sourceFile, onsuccess, onerror, onprogress, options){ var ret = new Number(); return ret; };

/**
 * Extracts every file from this to a given directory.
            <p>
All extracted files will be located in the given directory.
            </p>
            <p>
The <var>overwrite</var> attribute determines whether extracted files can overwrite existing files.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>destinationDirectory</em> does not exist              </li>
              <li>
IOError: If destinationDirectory can not be written to (e.g due to insufficient permissions)              </li>
              <li>
InvalidModificationError: If during extracting it is detected that an existing file would
have to be overwritten and the <em>overwrite</em> argument is <var>false</var>              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {FileReference} destinationDirectory
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {Boolean} overwrite
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.extractAll = function(destinationDirectory, onsuccess, onerror, onprogress, overwrite){ var ret = new Number(); return ret; };

/**
 * Retrieves information about the member files in .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {ArchiveFileEntryArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.getEntries = function(onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Retrieves information about with the specified name in .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If <em>ArchiveFileEntry</em> with the specific name does not exist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {String} name
 * @param {ArchiveFileEntrySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.getEntryByName = function(name, onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Closes the .
            <p>
Call this method when the archive file is not used any more. Once you call this method, the archive file object will not be available and any further operation attempt results in an <em>InvalidStateError</em>.<br/>Calling <em>close()</em> on an archive file object which is already closed does not raise any exception.
            </p>
           
 *
 * @type void
 * @memberOf ArchiveFile
 * @returns {void}
 */
ArchiveFile.prototype.close = function(){ return; };

/**
 * Called when all file entries in the archive file are retrieved successfully.
 *
 * @param {array} entries
 * @type void
 * @memberOf ArchiveFileEntryArraySuccessCallback
 * @returns {void}
 */
ArchiveFileEntryArraySuccessCallback.prototype.onsuccess = function(entries){ return; };

/**
 * Called when the archive file with the given name is ready to use.
 *
 * @param {ArchiveFile} archive
 * @type void
 * @memberOf ArchiveFileSuccessCallback
 * @returns {void}
 */
ArchiveFileSuccessCallback.prototype.onsuccess = function(archive){ return; };

/**
 * Called when the file with the given name through getEntryByName() is found successfully.
 *
 * @param {ArchiveFileEntry} entry
 * @type void
 * @memberOf ArchiveFileEntrySuccessCallback
 * @returns {void}
 */
ArchiveFileEntrySuccessCallback.prototype.onsuccess = function(entry){ return; };

/**
 * Opens the archive file. After this operation, it is possible to add or get files to and from the archive.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If archiveFile format is not recognized              </li>
              <li>
NotFoundError: If the <em>mode</em> is "r" and the <em>file</em> does not exist, or the <em>mode</em> is not "r" and the <em>file</em> cannot be created because the path of the file after excluding its file name does not exist              </li>
              <li>
IOError: If the access is denied due to insufficient permissions              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
            <p>
Use <em>mode</em> depending on which operation are intended:
            </p>
            <table>
              <tr>
                <th>
Mode                </th>
                <th>
Description                </th>
              </tr>
              <tr>
                <td>
r                </td>
                <td>
Use this mode for extracting or getting information about the contents of an archive file. <br/><em>file</em> must exist. If the <em>file</em> does not exist, <em>onerror</em> will be invoked (<em>NotFoundError</em>).<br/>When an archive file is opened in this mode, <em>add()</em> will not be available. (<em>IOError</em> will be thrown.)                 </td>
              </tr>
              <tr>
                <td>
w                </td>
                <td>
Use this mode to create an archive file and add files to the archive file. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>true</var>, the existing file will be overwritten with empty archive. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>false</var>, <em>onerror</em> callback will be invoked (<em>InvalidModificationError</em>). <br/>When an archive file is opened in this mode, <em>getEntries()</em>, <em>getEntryByName()</em>, and <em>extractAll()</em> are not available. (<em>IOError</em> will be thrown.)
                </td>
              </tr>
              <tr>
                <td>
rw                </td>
                <td>
Use this mode for archive zipping/unzipping. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>true</var>, the existing file will be overwritten with an empty archive. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>false</var>, the existing contents are preserved.
Both adding and extracting will be available. <br/>                </td>
              </tr>
              <tr>
                <td>
a                </td>
                <td>
Use this mode to add new files to an archive file. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists, then the previous contents of the archive file are preserved and new files can be added to the archive file.
In this mode, <em>getEntries()</em>, <em>getEntryByName()</em>, and <em>extractAll()</em> are not available. (<em>IOError</em> will be thrown.)
                </td>
              </tr>
            </table>
           
 *
 * @param {FileReference} file
 * @param {FileMode} mode
 * @param {ArchiveFileSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileOptions} options
 * @type Number
 * @memberOf ArchiveManager
 * @returns {Number}
 */
ArchiveManager.prototype.open = function(file, mode, onsuccess, onerror, options){ var ret = new Number(); return ret; };

/**
 * Cancels an operation with the given identifier.
 *
 * @param {Number} operationIdentifier
 * @type void
 * @memberOf ArchiveManager
 * @returns {void}
 */
ArchiveManager.prototype.abort = function(operationIdentifier){ return; };

/**
 * Path identifying the member file of ArchiveFile. This is a full path with the directory and base name of the entry.
 *
 * @type String
 */
ArchiveFileEntry.prototype.name = new String();

/**
 * Original size of the member file [bytes].
 * <p>
If the ArchiveFileEntry member is a folder, the attribute value will be the sum of sizes of all files in this directory.
            </p>
 *
 * @type Number
 */
ArchiveFileEntry.prototype.size = new Number();

/**
 * Amount of storage space used by the member file, which may be compressed, in ArchiveFile [bytes].
 * <p>
If ArchiveFileEntry member is a folder, the attribute will be sum of the sizes of all files in this directory.
            </p>
 * <p>
Until a new entry is added to the archive, the compressedSize is <var>null</var>            </p>
 *
 * @type Number
 */
ArchiveFileEntry.prototype.compressedSize = new Number();

/**
 * Date and time stored with the member file. This is usually the modification date of the file.
 *
 * @type Date
 */
ArchiveFileEntry.prototype.modified = new Date();

/**
 * Extracts ArchiveFileEntry to the given location.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>destinationDirectory</em> does not exist              </li>
              <li>
InvalidModificationError: If the file already exists and overwriting is not allowed              </li>
              <li>
IOError: If destinationDirectory can not be written to              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {FileReference} destinationDirectory
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {Boolean} stripName
 * @param {Boolean} overwrite
 * @type Number
 * @memberOf ArchiveFileEntry
 * @returns {Number}
 */
ArchiveFileEntry.prototype.extract = function(destinationDirectory, onsuccess, onerror, onprogress, stripName, overwrite){ var ret = new Number(); return ret; };

/**
 * Called to signal compressing or extracting operation progress.
 *
 * @param {Number} operationIdentifier
 * @param {Number} value
 * @param {String} filename
 * @type void
 * @memberOf ArchiveFileProgressCallback
 * @returns {void}
 */
ArchiveFileProgressCallback.prototype.onprogress = function(operationIdentifier, value, filename){ return; };

/**
 * The Archive API provides functions to create and manage archive files. You can extract files, add a file to an archive file, and so on.
 * <p>
For more information about how to use Archive API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/archive.htm">Archive Guide</a>.
        </p>
 *
 * @type ArchiveManager
 */
Tizen.prototype.archive = new ArchiveManager();

/**
 * The BadgeManagerObject interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.badge object that allows accessing the functionality of the Badge API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BadgeManagerObject}
 */
function BadgeManagerObject() {};
BadgeManagerObject.prototype = new Object();

/**
 * The BadgeChangeCallback interface specifies a set of methods that are invoked every time a badge number change occurs.
 *
 * @super Object
 * @constructor
 * @return {BadgeChangeCallback}
 */
function BadgeChangeCallback() {};
BadgeChangeCallback.prototype = new Object();

/**
 * The BadgeManager interface manages Badge functionality. It provides functions for creating and updating a badge, and registering for badge change events.
 *
 * @super Object
 * @constructor
 * @return {BadgeManager}
 */
function BadgeManager() {};
BadgeManager.prototype = new Object();

/**
 * The Badge API provides Badge management functionality. It provides functions for creating and updating a badge. The application with new unread information has a number in the upper right hand corner of the app icon. This number is called a badge. For example, when a new message is received the badge count appears on the app icon. The badge remains until the message is read by the user.
 * <p>
For more information about how to use Badge API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/ui_guide/badge.htm">Badge Guide</a>.
        </p>
 *
 * @type BadgeManager
 */
BadgeManagerObject.prototype.badge = new BadgeManager();

/**
 * Called when the badge number of a specified application is updated.
 *
 * @param {ApplicationId} appId
 * @param {Number} count
 * @type void
 * @memberOf BadgeChangeCallback
 * @returns {void}
 */
BadgeChangeCallback.prototype.onsuccess = function(appId, count){ return; };

/**
 * Maximum length of a badge number.
 *
 * @type Number
 */
BadgeManager.prototype.maxBadgeCount = new Number();

/**
 * Sets the badge count for the designated application. Only appplications with the same author signature can have their badge count modified.
 *
 * @param {ApplicationId} appId
 * @param {Number} count
 * @type void
 * @memberOf BadgeManager
 * @returns {void}
 */
BadgeManager.prototype.setBadgeCount = function(appId, count){ return; };

/**
 * Gets the badge count for the designated application.
 *
 * @param {ApplicationId} appId
 * @type Number
 * @memberOf BadgeManager
 * @returns {Number}
 */
BadgeManager.prototype.getBadgeCount = function(appId){ var ret = new Number(); return ret; };

/**
 * Adds a listener to receive a notification when the badge number for the designated application changes.
 *
 * @param {array} appIdList
 * @param {BadgeChangeCallback} successCallback
 * @type void
 * @memberOf BadgeManager
 * @returns {void}
 */
BadgeManager.prototype.addChangeListener = function(appIdList, successCallback){ return; };

/**
 * Unsubscribes from receiving notifications for badge number changes.
 *
 * @param {array} appIdList
 * @type void
 * @memberOf BadgeManager
 * @returns {void}
 */
BadgeManager.prototype.removeChangeListener = function(appIdList){ return; };

/**
 * The Badge API provides Badge management functionality. It provides functions for creating and updating a badge. The application with new unread information has a number in the upper right hand corner of the app icon. This number is called a badge. For example, when a new message is received the badge count appears on the app icon. The badge remains until the message is read by the user.
 * <p>
For more information about how to use Badge API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/ui_guide/badge.htm">Badge Guide</a>.
        </p>
 *
 * @type BadgeManager
 */
Tizen.prototype.badge = new BadgeManager();

/**
 * The BluetoothHealthChannel interface represents the Bluetooth health channel.
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthChannel}
 */
function BluetoothHealthChannel() {};
BluetoothHealthChannel.prototype = new Object();

/**
 * The BluetoothServiceSuccessCallback interface implements the success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothServiceSuccessCallback}
 */
function BluetoothServiceSuccessCallback() {};
BluetoothServiceSuccessCallback.prototype = new Object();

/**
 * The BluetoothDeviceArraySuccessCallback interface that defines the success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDeviceArraySuccessCallback}
 */
function BluetoothDeviceArraySuccessCallback() {};
BluetoothDeviceArraySuccessCallback.prototype = new Object();

/**
 * The BluetoothClass interface represents Bluetooth Class of Device/Service(CoD).
          <p>
Bluetooth device class describes the characteristics and capabilities of a device.
          </p>
          <p>
Bluetooth CoD is a 24 bit integer created by the union of three components:
          </p>
          <ul>
            <li>
Exactly one <b>Major Device Class</b>(bits 8-12 of CoD) - This is the highest level of granularity for defining a Bluetooth Device.            </li>
            <li>
Exactly one <b>Minor Device Class</b>(bits 2-7 of CoD) - This is to be interpreted only in the context of the Major Device Class. Thus, the meaning of these bits may change, depending on the value of 'Major Device Class'.             </li>
            <li>
Zero or more <b>Major Service Classes</b>(bits 13-23) - Represents the services supported by the device.            </li>
          </ul>
          <p>
The Major and Minor classes are intended to define a general family of devices with which any particular implementation wishes to be associated.
No assumptions should be made about specific functionality or characteristics of any application, based solely on the assignment of a Major or minor device class.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothClass}
 */
function BluetoothClass() {};
BluetoothClass.prototype = new Object();

/**
 * The BluetoothAdapterChangeCallback interface specifies a set of methods to be invoked when the changes of Bluetooth adapter occur.
 *
 * @super Object
 * @constructor
 * @return {BluetoothAdapterChangeCallback}
 */
function BluetoothAdapterChangeCallback() {};
BluetoothAdapterChangeCallback.prototype = new Object();

/**
 * The BluetoothSocket interface represents the Bluetooth socket.
          <p>
The socket object is created by <em>BluetoothDevice.connectToServiceByUUID()</em> or <em>BluetoothAdapter.registerRFCOMMServiceByUUID()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothSocket}
 */
function BluetoothSocket() {};
BluetoothSocket.prototype = new Object();

/**
 * The BluetoothDiscoverDevicesSuccessCallback interface that defines the success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDiscoverDevicesSuccessCallback}
 */
function BluetoothDiscoverDevicesSuccessCallback() {};
BluetoothDiscoverDevicesSuccessCallback.prototype = new Object();

/**
 * The BluetoothManagerObject interface defines what is instantiated by the object from the Tizen platform.
          <p>
The <em>tizen.bluetooth</em> object allows access to the Bluetooth API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothManagerObject}
 */
function BluetoothManagerObject() {};
BluetoothManagerObject.prototype = new Object();

/**
 * The BluetoothManager interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {BluetoothManager}
 */
function BluetoothManager() {};
BluetoothManager.prototype = new Object();

/**
 * The BluetoothClassDeviceMajor interface holds the identifiers for major device classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceMajor}
 */
function BluetoothClassDeviceMajor() {};
BluetoothClassDeviceMajor.prototype = new Object();

/**
 * The BluetoothHealthChannelChangeCallback interface specifies a set of methods to be invoked when the changes of heath channel occur.
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthChannelChangeCallback}
 */
function BluetoothHealthChannelChangeCallback() {};
BluetoothHealthChannelChangeCallback.prototype = new Object();

/**
 * The BluetoothAdapter interface provides access to control the device's Bluetooth adapter.
          <p>
This interface offers methods to control local Bluetooth behavior, such as:
          </p>
          <ul>
            <li>
Turning on/off Bluetooth radio            </li>
            <li>
Changing device visibility            </li>
            <li>
Scanning for remote devices            </li>
            <li>
Accessing known devices            </li>
            <li>
Registering a service in the device service database            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothAdapter}
 */
function BluetoothAdapter() {};
BluetoothAdapter.prototype = new Object();

/**
 * The BluetoothHealthApplicationSuccessCallback interface that defines the success method for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthApplicationSuccessCallback}
 */
function BluetoothHealthApplicationSuccessCallback() {};
BluetoothHealthApplicationSuccessCallback.prototype = new Object();

/**
 * The BluetoothServiceHandler interface provides methods to handle Bluetooth service.
 *
 * @super Object
 * @constructor
 * @return {BluetoothServiceHandler}
 */
function BluetoothServiceHandler() {};
BluetoothServiceHandler.prototype = new Object();

/**
 * The BluetoothDevice interface represents a remote Bluetooth device.
          <p>
A <em>BluetoothDevice</em> object can be retrieved using one of the following APIs:
          </p>
          <ul>
            <li>
 BluetoothAdapter.getDevice()            </li>
            <li>
 BluetoothAdapter.getKnownDevices()             </li>
            <li>
 BluetoothAdapter.discoverDevices()             </li>
            <li>
 BluetoothAdapter.createBonding()             </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothDevice}
 */
function BluetoothDevice() {};
BluetoothDevice.prototype = new Object();

/**
 * The BluetoothClassDeviceService interface holds identifiers for the major service classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceService}
 */
function BluetoothClassDeviceService() {};
BluetoothClassDeviceService.prototype = new Object();

/**
 * The BluetoothHealthApplication interface represents the Bluetooth health application.
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthApplication}
 */
function BluetoothHealthApplication() {};
BluetoothHealthApplication.prototype = new Object();

/**
 * The BluetoothDeviceSuccessCallback interface implements the success callback and .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDeviceSuccessCallback}
 */
function BluetoothDeviceSuccessCallback() {};
BluetoothDeviceSuccessCallback.prototype = new Object();

/**
 * The BluetoothProfileHandler interface represents the Bluetooth profile handler.
 *
 * @super Object
 * @constructor
 * @return {BluetoothProfileHandler}
 */
function BluetoothProfileHandler() {};
BluetoothProfileHandler.prototype = new Object();

/**
 * This interface represents the handler of Bluetooth health device profile. The BluetoothHealthProfileHandler object is created by .
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthProfileHandler}
 */
function BluetoothHealthProfileHandler() {};
BluetoothHealthProfileHandler.prototype = new BluetoothProfileHandler();

/**
 * The BluetoothClassDeviceMinor interface holds the identifiers for minor device classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceMinor}
 */
function BluetoothClassDeviceMinor() {};
BluetoothClassDeviceMinor.prototype = new Object();

/**
 * The BluetoothHealthChannelSuccessCallback interface that defines the success method for and the event callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthChannelSuccessCallback}
 */
function BluetoothHealthChannelSuccessCallback() {};
BluetoothHealthChannelSuccessCallback.prototype = new Object();

/**
 * The BluetoothSocketSuccessCallback interface that defines the success method for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothSocketSuccessCallback}
 */
function BluetoothSocketSuccessCallback() {};
BluetoothSocketSuccessCallback.prototype = new Object();

/**
 * The remote device to which this channel is connected.
 *
 * @type BluetoothDevice
 */
BluetoothHealthChannel.prototype.peer = new BluetoothDevice();

/**
 * The type of this channel.
 *
 * @type BluetoothHealthChannelType
 */
BluetoothHealthChannel.prototype.channelType = new BluetoothHealthChannelType();

/**
 * The health application which is used to communicate with the remote device.
 *
 * @type BluetoothHealthApplication
 */
BluetoothHealthChannel.prototype.application = new BluetoothHealthApplication();

/**
 * The flag indicating whether any remote device is connected.
 *
 * @type Boolean
 */
BluetoothHealthChannel.prototype.isConnected = new Boolean();

/**
 * Closes the connected channel. is changed to and is invoked when this channel is closed successfully.
 *
 * @type void
 * @memberOf BluetoothHealthChannel
 * @returns {void}
 */
BluetoothHealthChannel.prototype.close = function(){ return; };

/**
 * Sends data and returns the number of bytes actually written.
 *
 * @param {array} data
 * @type Number
 * @memberOf BluetoothHealthChannel
 * @returns {Number}
 */
BluetoothHealthChannel.prototype.sendData = function(data){ var ret = new Number(); return ret; };

/**
 * Sets the listener to receive notifications.
 *
 * @param {BluetoothHealthChannelChangeCallback} listener
 * @type void
 * @memberOf BluetoothHealthChannel
 * @returns {void}
 */
BluetoothHealthChannel.prototype.setListener = function(listener){ return; };

/**
 * Unsets the listener. This stops receiving notifications.
 *
 * @type void
 * @memberOf BluetoothHealthChannel
 * @returns {void}
 */
BluetoothHealthChannel.prototype.unsetListener = function(){ return; };

/**
 * Called when registering a service with the local device is successful.
 *
 * @param {BluetoothServiceHandler} handler
 * @type void
 * @memberOf BluetoothServiceSuccessCallback
 * @returns {void}
 */
BluetoothServiceSuccessCallback.prototype.onsuccess = function(handler){ return; };

/**
 * Called when device information is ready.
 *
 * @param {array} devices
 * @type void
 * @memberOf BluetoothDeviceArraySuccessCallback
 * @returns {void}
 */
BluetoothDeviceArraySuccessCallback.prototype.onsuccess = function(devices){ return; };

/**
 * The major device class.
 * <p>
The <em>BluetoothClassDeviceMajor</em> interface contains the list of known values.
            </p>
 *
 * @type octet
 */
BluetoothClass.prototype.major = new octet();

/**
 * The minor device class.
 * <p>
The <em>BluetoothClassDeviceMinor</em> interface contains the list of known values.
            </p>
 *
 * @type octet
 */
BluetoothClass.prototype.minor = new octet();

/**
 * The services provided by this device and it refers to the interface for the list of possible values.
 *
 * @type array
 */
BluetoothClass.prototype.services = new array();

/**
 * Checks whether the given service exists in the .
 *
 * @param {Number} service
 * @type Boolean
 * @memberOf BluetoothClass
 * @returns {Boolean}
 */
BluetoothClass.prototype.hasService = function(service){ var ret = new Boolean(); return ret; };

/**
 * Called when the power state is changed.
 *
 * @param {Boolean} powered
 * @type void
 * @memberOf BluetoothAdapterChangeCallback
 * @returns {void}
 */
BluetoothAdapterChangeCallback.prototype.onstatechanged = function(powered){ return; };

/**
 * Called when the name is changed.
 *
 * @param {String} name
 * @type void
 * @memberOf BluetoothAdapterChangeCallback
 * @returns {void}
 */
BluetoothAdapterChangeCallback.prototype.onnamechanged = function(name){ return; };

/**
 * Called when the visibility is changed.
 *
 * @param {Boolean} visible
 * @type void
 * @memberOf BluetoothAdapterChangeCallback
 * @returns {void}
 */
BluetoothAdapterChangeCallback.prototype.onvisibilitychanged = function(visible){ return; };

/**
 * The service UUID to which this socket is connected.
 *
 * @type BluetoothUUID
 */
BluetoothSocket.prototype.uuid = new BluetoothUUID();

/**
 * The socket state.
 *
 * @type BluetoothSocketState
 */
BluetoothSocket.prototype.state = new BluetoothSocketState();

/**
 * The peer device to which this socket is connected.
 *
 * @type BluetoothDevice
 */
BluetoothSocket.prototype.peer = new BluetoothDevice();

/**
 * Called when an incoming message is received successfully from the peer. By default, this attribute is set to null.
 *
 * @type SuccessCallback
 */
BluetoothSocket.prototype.onmessage = new SuccessCallback();

/**
 * Called when the socket is closed successfully. By default, this attribute is set to null.
 *
 * @type SuccessCallback
 */
BluetoothSocket.prototype.onclose = new SuccessCallback();

/**
 * Writes data as a sequence of bytes onto the socket and returns the number of bytes actually written.
 *
 * @param {array} data
 * @type Number
 * @memberOf BluetoothSocket
 * @returns {Number}
 */
BluetoothSocket.prototype.writeData = function(data){ var ret = new Number(); return ret; };

/**
 * Reads data from the socket.
            <p>
This method should be called only in the <em>BluetoothSocket.onmessage</em> handler, that is, when data is ready on the socket.
            </p>
           
 *
 * @type array
 * @memberOf BluetoothSocket
 * @returns {array}
 */
BluetoothSocket.prototype.readData = function(){ var ret = new array(); return ret; };

/**
 * Closes the socket.
            <p>
<b>BluetoothSocket.state</b> changes to <var>CLOSED</var>, and <em>BluetoothSocket.onclose()</em> is invoked on success.
            </p>
           
 *
 * @type void
 * @memberOf BluetoothSocket
 * @returns {void}
 */
BluetoothSocket.prototype.close = function(){ return; };

/**
 * Called at the beginning of a device discovery process for finding the nearby Bluetooth device.
 *
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.onstarted = function(){ return; };

/**
 * Called when a new device is discovered in the process of inquiry/discovery.
 *
 * @param {BluetoothDevice} device
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.ondevicefound = function(device){ return; };

/**
 * Called when a device is lost from proximity. After that, this device is no longer visible.
 *
 * @param {BluetoothAddress} address
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.ondevicedisappeared = function(address){ return; };

/**
 * Called when the device discovery process has finished.
 *
 * @param {array} foundDevices
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.onfinished = function(foundDevices){ return; };

/**
 * The Bluetooth API defines interfaces and methods to manage Bluetooth.
 * <p>
The following Bluetooth functionalities are provided:
        </p>
 * <ul>
 * <li>Controls local Bluetooth device, that is, turn Bluetooth on/off, etc.
 * <li>Sets visibility
 * <li>Discovers nearby Bluetooth devices (Device discovery)
 * <li>Gets bonded devices information
 * <li>Controls bonding
 * <li>Connects to a service on a remote device and exchanges data
 * <li>Registers a service (RFCOMM) on a local device, which can be consumed by remote devices to exchange data
 * </ul>
 * <p>
For more information on the Bluetooth features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/communication_guide/bluetooth.htm">Bluetooth Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.bluetooth
 * @type BluetoothManager
 */
BluetoothManagerObject.prototype.bluetooth = new BluetoothManager();

/**
 * The major device class identifier of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceMajor
 */
BluetoothManager.prototype.deviceMajor = new BluetoothClassDeviceMajor();

/**
 * The minor device class identifier of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceMinor
 */
BluetoothManager.prototype.deviceMinor = new BluetoothClassDeviceMinor();

/**
 * The major service class identifier of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceService
 */
BluetoothManager.prototype.deviceService = new BluetoothClassDeviceService();

/**
 * Gets the default local Bluetooth adapter.
 *
 * @type BluetoothAdapter
 * @memberOf BluetoothManager
 * @returns {BluetoothAdapter}
 */
BluetoothManager.prototype.getDefaultAdapter = function(){ var ret = new BluetoothAdapter(); return ret; };

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.MISC = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.COMPUTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.PHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.NETWORK = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.AUDIO_VIDEO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.PERIPHERAL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.IMAGING = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.WEARABLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.TOY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.HEALTH = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.UNCATEGORIZED = new Number();

/**
 * Called when the message is received.
 *
 * @param {array} data
 * @type void
 * @memberOf BluetoothHealthChannelChangeCallback
 * @returns {void}
 */
BluetoothHealthChannelChangeCallback.prototype.onmessage = function(data){ return; };

/**
 * Called when the health channel is closed.
 *
 * @type void
 * @memberOf BluetoothHealthChannelChangeCallback
 * @returns {void}
 */
BluetoothHealthChannelChangeCallback.prototype.onclose = function(){ return; };

/**
 * The readable name of the Bluetooth adapter.
 *
 * @type String
 */
BluetoothAdapter.prototype.name = new String();

/**
 * The unique hardware address of the Bluetooth adapter, also known as the MAC address.
 *
 * @type BluetoothAddress
 */
BluetoothAdapter.prototype.address = new BluetoothAddress();

/**
 * The current state of the Bluetooth adapter.
 * <p>
This attribute holds one of the following 2 values:
            </p>
 * <ul>
 * <li>- If Bluetooth adapter is currently on
 * <li>- If Bluetooth adapter is currently off
 * </ul>
 *
 * @type Boolean
 */
BluetoothAdapter.prototype.powered = new Boolean();

/**
 * The current visibility state of the Bluetooth adapter, that is, whether the local device is discoverable by remote devices.
 *
 * @type Boolean
 */
BluetoothAdapter.prototype.visible = new Boolean();

/**
 * Sets the local Bluetooth adapter name.
            <p>
Sends a request to Bluetooth hardware to change the name of the local Bluetooth adapter to <em>name</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError: If a Bluetooth device is turned off.               </li>
              <li>
 UnknownError: In any other error case.               </li>
              <li>
 NotSupportedError: If a device doesn't allow a Tizen Web application to change the name of the local Bluetooth adapter.               </li>
            </ul>
           
 *
 * @param {String} name
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setName = function(name, successCallback, errorCallback){ return; };

/**
 * Sets the state of a Bluetooth adapter to on or off by sending a request to Bluetooth hardware to change the power state. For most Bluetooth actions, the Bluetooth adapter must be powered on.
            <p>
The ErrorCallback is launched with these error names:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is busy              </li>
              <li>
 NotSupportedError: If a device does not allow a Tizen Web application to turn on or off the Bluetooth service on a device.
<br/>   Bluetooth must be enabled on the device which the remote Bluetooth devices always work with              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {Boolean} state
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setPowered = function(state, successCallback, errorCallback){ return; };

/**
 * Sets the local device visibility by sending a request to a Bluetooth hardware to change the device visible state to .
            <p>
If <em>mode</em> is <var>true</var>, then the device is visible to other devices, that is, it responds to inquiry calls from remote devices for time period defined (in seconds) by <em>timeout</em>. After the timeout, the device will become invisible.
            </p>
            <p>
If <em>timeout</em> is not passed or an invalid parameter is passed, the <em>timeout </em>defaults to <var>180 </var>seconds (3 minutes). A <em>timeout</em> of <var>0</var> is considered unlimited.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 NotSupportedError: If a device does not allow a Tizen Web application to change the visibility of the local device
<br/>   because some devices must be always discoverable from the remote Bluetooth devices              </li>
              <li>
 UnknownError - If any other error case occurs              </li>
            </ul>
           
 *
 * @param {Boolean} mode
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Number} timeout
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setVisible = function(mode, successCallback, errorCallback, timeout){ return; };

/**
 * Sets the listener to receive notifications about changes of Bluetooth adapter.
 *
 * @param {BluetoothAdapterChangeCallback} listener
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setChangeListener = function(listener){ return; };

/**
 * Unsets the listener, so stop receiving notifications about changes of Bluetooth adapter.
 *
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.unsetChangeListener = function(){ return; };

/**
 * Discovers nearby Bluetooth devices if any, that is, devices within proximity to the local device.
            <p>
This method initiates the device discovery process. Depending on the progress of this process the following methods are invoked:
            </p>
            <ul>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.onstarted()</em> - when a discovery process starts successfully.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.ondevicefound() </em>- when any device is found in the process and this method is invoked with the device information. If no device is found, this method will never be invoked.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.ondevicedisappeared()</em> - when a device goes out of proximity and this method is invoked with the address of the device.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.onfinished()</em> - when a discovery process is completed.              </li>
            </ul>
            <p>
A discovery process can be canceled anytime, by calling <em>stopDiscovery() </em>on the <em>BluetoothAdapter</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothDiscoverDevicesSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.discoverDevices = function(successCallback, errorCallback){ return; };

/**
 * Stops an active device discovery session.
            <p>
Device discovery is a heavyweight procedure, hence we recommend stopping discovery as soon as the required device is found. This method cancels an active discovery session.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.stopDiscovery = function(successCallback, errorCallback){ return; };

/**
 * Gets all the known devices that have information stored in the local Bluetooth adapter.
            <p>
A known device is one of the following:
            </p>
            <ul>
              <li>
a bonded device              </li>
              <li>
a device found in last inquiry process              </li>
            </ul>
            <p>
On success, it returns the list of currently known devices through <em>BluetoothDeviceArraySuccessCallback</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothDeviceArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.getKnownDevices = function(successCallback, errorCallback){ return; };

/**
 * Gets the object for a given device hardware address.
            <p>
This method returns device information stored in the local Bluetooth adapter for the specified device <em>address</em> through
BluetoothDeviceSuccessCallback.
A valid hardware address must be passed, such as "35:F4:59:D1:7A:03".
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no device with the given address              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {BluetoothDeviceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.getDevice = function(address, successCallback, errorCallback){ return; };

/**
 * Creates a bond with a remote device by initiating the bonding process with peer device, using the given MAC address. The remote device must be bonded with the local device in order to connect to services of the remote device and then exchange data with each other.
            <p>
If the bonding process is successful, the device information is sent in <em>successCallback</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no device with the given address              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {BluetoothDeviceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.createBonding = function(address, successCallback, errorCallback){ return; };

/**
 * Destroys the bond with a remote device.
            <p>
This method initiates the process of removing the specified <em>address</em> from the list of bonded devices.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no device with the given address              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.destroyBonding = function(address, successCallback, errorCallback){ return; };

/**
 * Registers a service record in the device service record database with the specified , .
            <p>
On success of the service registration, it returns a <em>BluetoothServiceHandler</em> object as the first parameter of <em>successCallback</em>, and listens for client connections.
The service handler can be used to be notified on client connections or to unregister the service.
User interaction is mandatory to connect to a registered service.
            </p>
            <p>
If any client(remote device) connects to this service, then <em>BluetoothServiceHandler.onconnect()</em> is invoked with <em>BluetoothSocket</em> object.
            </p>
            <p>
<em>BluetoothServiceHandler.unregister()</em> can be used to unregister the service record from the device service database and stop listening for client connections.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothUUID} uuid
 * @param {String} name
 * @param {BluetoothServiceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.registerRFCOMMServiceByUUID = function(uuid, name, successCallback, errorCallback){ return; };

/**
 * Gets the profile handler for the given type.
 *
 * @param {BluetoothProfileType} profileType
 * @type BluetoothProfileHandler
 * @memberOf BluetoothAdapter
 * @returns {BluetoothProfileHandler}
 */
BluetoothAdapter.prototype.getBluetoothProfileHandler = function(profileType){ var ret = new BluetoothProfileHandler(); return ret; };

/**
 * Called when the application is registered successfully.
 *
 * @param {BluetoothHealthApplication} application
 * @type void
 * @memberOf BluetoothHealthApplicationSuccessCallback
 * @returns {void}
 */
BluetoothHealthApplicationSuccessCallback.prototype.onsuccess = function(application){ return; };

/**
 * The UUID of the service.
 *
 * @type BluetoothUUID
 */
BluetoothServiceHandler.prototype.uuid = new BluetoothUUID();

/**
 * The name of the service.
 *
 * @type String
 */
BluetoothServiceHandler.prototype.name = new String();

/**
 * The flag indicating whether any remote devices is using this service.
 *
 * @type Boolean
 */
BluetoothServiceHandler.prototype.isConnected = new Boolean();

/**
 * Called when a remote device is connected successfully to this service. By default, this attribute is set to null.
 *
 * @type BluetoothSocketSuccessCallback
 */
BluetoothServiceHandler.prototype.onconnect = new BluetoothSocketSuccessCallback();

/**
 * Unregisters a service record from the Bluetooth services record database and stops listening for new connections to this service.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothServiceHandler
 * @returns {void}
 */
BluetoothServiceHandler.prototype.unregister = function(successCallback, errorCallback){ return; };

/**
 * The readable name of this remote device.
 *
 * @type String
 */
BluetoothDevice.prototype.name = new String();

/**
 * The hardware address of this remote device.
 *
 * @type BluetoothAddress
 */
BluetoothDevice.prototype.address = new BluetoothAddress();

/**
 * The device class, which represents the type of the device and the services it provides.
 *
 * @type BluetoothClass
 */
BluetoothDevice.prototype.deviceClass = new BluetoothClass();

/**
 * The bond state of this remote device with the local device.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isBonded = new Boolean();

/**
 * The flag indicating whether the local device recognizes this remote device as a trusted device or not.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isTrusted = new Boolean();

/**
 * The flag indicating whether the connection state of this remote device with the local device.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isConnected = new Boolean();

/**
 * The list of 128 bit service UUIDs available on this remote device.
 *
 * @type array
 */
BluetoothDevice.prototype.uuids = new array();

/**
 * Connects to a specified service identified by on this remote device.
            <p>
If opening a connection is successful, then a <em>BluetoothSocket</em> object with open state is sent using <em>successCallback</em>, through which data can be exchanged by both devices.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no service with the specified <em>uuid</em>              </li>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothUUID} uuid
 * @param {BluetoothSocketSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothDevice
 * @returns {void}
 */
BluetoothDevice.prototype.connectToServiceByUUID = function(uuid, successCallback, errorCallback){ return; };

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.LIMITED_DISCOVERABILITY = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.POSITIONING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.NETWORKING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.RENDERING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.CAPTURING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.OBJECT_TRANSFER = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.AUDIO = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.TELEPHONY = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.INFORMATION = new Number();

/**
 * The MDEP data type used for communication, which is referenced in the ISO/IEEE 11073-20601 spec.
 * <p>
For example, pulse oximeter is 4100 and blood pressure monitor is 4103.
            </p>
 *
 * @type Number
 */
BluetoothHealthApplication.prototype.dataType = new Number();

/**
 * The friendly name associated with sink application.
 *
 * @type String
 */
BluetoothHealthApplication.prototype.name = new String();

/**
 * Called when a health device is connected successfully through this application.
 * <p>
By default, this attribute is set to null.
            </p>
 *
 * @type BluetoothHealthChannelSuccessCallback
 */
BluetoothHealthApplication.prototype.onconnect = new BluetoothHealthChannelSuccessCallback();

/**
 * Unregisters this application.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothHealthApplication
 * @returns {void}
 */
BluetoothHealthApplication.prototype.unregister = function(successCallback, errorCallback){ return; };

/**
 * Called on success.
 *
 * @param {BluetoothDevice} device
 * @type void
 * @memberOf BluetoothDeviceSuccessCallback
 * @returns {void}
 */
BluetoothDeviceSuccessCallback.prototype.onsuccess = function(device){ return; };

/**
 * The Bluetooth profile type.
 *
 * @type BluetoothProfileType
 */
BluetoothProfileHandler.prototype.profileType = new BluetoothProfileType();

/**
 * Registers an application for the Sink role.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {Number} dataType
 * @param {String} name
 * @param {BluetoothHealthApplicationSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothHealthProfileHandler
 * @returns {void}
 */
BluetoothHealthProfileHandler.prototype.registerSinkApplication = function(dataType, name, successCallback, errorCallback){ return; };

/**
 * Connects to the health device which acts as the Source role.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothDevice} peer
 * @param {BluetoothHealthApplication} application
 * @param {BluetoothHealthChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothHealthProfileHandler
 * @returns {void}
 */
BluetoothHealthProfileHandler.prototype.connectToSource = function(peer, application, successCallback, errorCallback){ return; };

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_DESKTOP = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_SERVER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_LAPTOP = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_HANDHELD_PC_OR_PDA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_PALM_PC_OR_PDA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_WEARABLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_CELLULAR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_CORDLESS = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_SMARTPHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_MODEM_OR_GATEWAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_ISDN = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_UNRECOGNIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_WEARABLE_HEADSET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HANDSFREE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_MICROPHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_LOUDSPEAKER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HEADPHONES = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_PORTABLE_AUDIO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_CAR_AUDIO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_SETTOP_BOX = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HIFI = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VCR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VIDEO_CAMERA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_CAMCORDER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_DISPLAY_AND_LOUDSPEAKER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VIDEO_CONFERENCING = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_GAMING_TOY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_KEYBOARD = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_POINTING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_KEYBOARD_AND_POINTING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_JOYSTICK = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_GAMEPAD = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_REMOTE_CONTROL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_SENSING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_DEGITIZER_TABLET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_CARD_READER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_DIGITAL_PEN = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_HANDHELD_SCANNER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_HANDHELD_INPUT_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_DISPLAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_CAMERA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_SCANNER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_PRINTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_WRITST_WATCH = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_PAGER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_JACKET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_HELMET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_GLASSES = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_ROBOT = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_VEHICLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_DOLL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_CONTROLLER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_GAME = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_UNDEFINED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_BLOOD_PRESSURE_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_THERMOMETER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_WEIGHING_SCALE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_GLUCOSE_METER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PULSE_OXIMETER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PULSE_RATE_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_DATA_DISPLAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_STEP_COUNTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_BODY_COMPOSITION_ANALYZER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PEAK_FLOW_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_MEDICATION_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_KNEE_PROSTHESIS = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_ANKLE_PROSTHESIS = new Number();

/**
 * Called when a connection is established.
 *
 * @param {BluetoothHealthChannel} channel
 * @type void
 * @memberOf BluetoothHealthChannelSuccessCallback
 * @returns {void}
 */
BluetoothHealthChannelSuccessCallback.prototype.onsuccess = function(channel){ return; };

/**
 * Called when the connection to a service is ready.
 *
 * @param {BluetoothSocket} socket
 * @type void
 * @memberOf BluetoothSocketSuccessCallback
 * @returns {void}
 */
BluetoothSocketSuccessCallback.prototype.onsuccess = function(socket){ return; };

/**
 * The Bluetooth API defines interfaces and methods to manage Bluetooth.
 * <p>
The following Bluetooth functionalities are provided:
        </p>
 * <ul>
 * <li>Controls local Bluetooth device, that is, turn Bluetooth on/off, etc.
 * <li>Sets visibility
 * <li>Discovers nearby Bluetooth devices (Device discovery)
 * <li>Gets bonded devices information
 * <li>Controls bonding
 * <li>Connects to a service on a remote device and exchanges data
 * <li>Registers a service (RFCOMM) on a local device, which can be consumed by remote devices to exchange data
 * </ul>
 * <p>
For more information on the Bluetooth features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/communication_guide/bluetooth.htm">Bluetooth Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.bluetooth
 * @type BluetoothManager
 */
Tizen.prototype.bluetooth = new BluetoothManager();

/**
 * The callback function used to return content to scan.
 *
 * @super Object
 * @constructor
 * @return {ContentScanSuccessCallback}
 */
function ContentScanSuccessCallback() {};
ContentScanSuccessCallback.prototype = new Object();

/**
 * The AudioContentLyrics interface provides lyrics for music.
 *
 * @super Object
 * @constructor
 * @return {AudioContentLyrics}
 */
function AudioContentLyrics() {};
AudioContentLyrics.prototype = new Object();

/**
 * The PlaylistItemArraySuccessCallback interface specifies a success callback that is invoked when a list of playlist items are successfully retrieved.
 *
 * @super Object
 * @constructor
 * @return {PlaylistItemArraySuccessCallback}
 */
function PlaylistItemArraySuccessCallback() {};
PlaylistItemArraySuccessCallback.prototype = new Object();

/**
 * The Content interface provides access to the properties of a content item.
 *
 * @super Object
 * @constructor
 * @return {Content}
 */
function Content() {};
Content.prototype = new Object();

/**
 * Defines what is instantiated by the Tizen object.
          <p>
The <em>tizen.content </em>object allows accessing the functionality of the Content module.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContentManagerObject}
 */
function ContentManagerObject() {};
ContentManagerObject.prototype = new Object();

/**
 * The callback function used to return a list of content objects.
 *
 * @super Object
 * @constructor
 * @return {ContentArraySuccessCallback}
 */
function ContentArraySuccessCallback() {};
ContentArraySuccessCallback.prototype = new Object();

/**
 * The ImageContent interface extends a basic object with image-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {ImageContent}
 */
function ImageContent() {};
ImageContent.prototype = new Content();

/**
 * This interface specifies a set of methods that are invoked every time a content change occurs.
 *
 * @super Object
 * @constructor
 * @return {ContentChangeCallback}
 */
function ContentChangeCallback() {};
ContentChangeCallback.prototype = new Object();

/**
 * The AudioContent interface extends a basic object with audio-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {AudioContent}
 */
function AudioContent() {};
AudioContent.prototype = new Content();

/**
 * The PlaylistArraySuccessCallback interface specifies a success callback that is invoked when all existing playlists are retrieved successfully.
          <p>
It is used in <em>tizen.content.getPlaylists()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PlaylistArraySuccessCallback}
 */
function PlaylistArraySuccessCallback() {};
PlaylistArraySuccessCallback.prototype = new Object();

/**
 * The VideoContent interface extends a basic object with video-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {VideoContent}
 */
function VideoContent() {};
VideoContent.prototype = new Content();

/**
 * The ContentManager interface provides operations to retrieve and manipulate content.
 *
 * @super Object
 * @constructor
 * @return {ContentManager}
 */
function ContentManager() {};
ContentManager.prototype = new Object();

/**
 * The PlaylistItem interface represents a playlist item.
 *
 * @super Object
 * @constructor
 * @return {PlaylistItem}
 */
function PlaylistItem() {};
PlaylistItem.prototype = new Object();

/**
 * The callback function used to return a list of ContentDirectory objects.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectoryArraySuccessCallback}
 */
function ContentDirectoryArraySuccessCallback() {};
ContentDirectoryArraySuccessCallback.prototype = new Object();

/**
 * The Playlist interface represents a playlist.
 *
 * @super Object
 * @constructor
 * @return {Playlist}
 */
function Playlist() {};
Playlist.prototype = new Object();

/**
 * The PlaylistSuccessCallback interface specifies a success callback that is invoked when a new playlist is successfully created.
          <p>
It is used in <em>tizen.content.createPlaylist()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PlaylistSuccessCallback}
 */
function PlaylistSuccessCallback() {};
PlaylistSuccessCallback.prototype = new Object();

/**
 * The ContentDirectory interface provides access to properties of a content directory.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectory}
 */
function ContentDirectory() {};
ContentDirectory.prototype = new Object();

/**
 * Called when the scanning has been completed.
 *
 * @param {String} contentURI
 * @type void
 * @memberOf ContentScanSuccessCallback
 * @returns {void}
 */
ContentScanSuccessCallback.prototype.onsuccess = function(contentURI){ return; };

/**
 * The type of lyrics, that is, whether they are synchronized with the music.
 *
 * @type AudioContentLyricsType
 */
AudioContentLyrics.prototype.type = new AudioContentLyricsType();

/**
 * The array of timestamps in milliseconds for lyrics.
 * <p>
If the lyrics are not synchronized (if there is no time information for the lyrics) the array is undefined.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.timestamps = new array();

/**
 * The array of lyrics snippets.
 * <p>
If the lyrics are not synchronized, the array has only one member with full lyrics.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.texts = new array();

/**
 * Called when the method completes successfully.
 *
 * @param {array} items
 * @type void
 * @memberOf PlaylistItemArraySuccessCallback
 * @returns {void}
 */
PlaylistItemArraySuccessCallback.prototype.onsuccess = function(items){ return; };

/**
 * The list of attributes that are editable to the local backend using the update() or updateBatch() method.
 *
 * @type array
 */
Content.prototype.editableAttributes = new array();

/**
 * The opaque content identifier.
 *
 * @type ContentId
 */
Content.prototype.id = new ContentId();

/**
 * The content name. The initial value is the file name of the content.
 *
 * @type String
 */
Content.prototype.name = new String();

/**
 * The content type.
 *
 * @type ContentType
 */
Content.prototype.type = new ContentType();

/**
 * The content MIME type.
 *
 * @type String
 */
Content.prototype.mimeType = new String();

/**
 * The content title.
 *
 * @type String
 */
Content.prototype.title = new String();

/**
 * The URI to access the content.
 *
 * @type String
 */
Content.prototype.contentURI = new String();

/**
 * The array of content thumbnail URIs.
 *
 * @type array
 */
Content.prototype.thumbnailURIs = new array();

/**
 * The date when content has been released publicly. If only the release year is known, then the month and date are set to January and 1st respectively.
 *
 * @type Date
 */
Content.prototype.releaseDate = new Date();

/**
 * The last modified date for a content item.
 *
 * @type Date
 */
Content.prototype.modifiedDate = new Date();

/**
 * The file size of the content in bytes.
 *
 * @type Number
 */
Content.prototype.size = new Number();

/**
 * The content description.
 *
 * @type String
 */
Content.prototype.description = new String();

/**
 * The content rating. This value can range from to .
 *
 * @type Number
 */
Content.prototype.rating = new Number();

/**
 * Boolean value that indicates whether a content item is marked as a favorite.
 *
 * @type Boolean
 */
Content.prototype.isFavorite = new Boolean();

/**
 * The Content API provides functionality to discover content such as images, videos, music, or others.
 * <p>
It is possible to search for specific content using filters.
The API also supports setting the attributes of specific content.
        </p>
 * <p>
For more information on the Content features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/mediacontent.htm">Content Guide</a>.
        </p>
 * <p>
For more information about how to use the playlist feature of the Content API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/playlist.htm">Playlist Guide</a>.
        </p>
 * <p>
Playlist functionality has been added in Tizen 2.3.
        </p>
 *
 * @type ContentManager
 */
ContentManagerObject.prototype.content = new ContentManager();

/**
 * Called when the list of content is retrieved successfully.
 *
 * @param {array} contents
 * @type void
 * @memberOf ContentArraySuccessCallback
 * @returns {void}
 */
ContentArraySuccessCallback.prototype.onsuccess = function(contents){ return; };

/**
 * The geographical location where the image has been made.
 *
 * @type SimpleCoordinates
 */
ImageContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The width of an image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.width = new Number();

/**
 * The height of an image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.height = new Number();

/**
 * The image orientation.
 *
 * @type ImageContentOrientation
 */
ImageContent.prototype.orientation = new ImageContentOrientation();

/**
 * Called when content is added.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentadded = function(content){ return; };

/**
 * Called when content is updated.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentupdated = function(content){ return; };

/**
 * Called when content is removed.
 *
 * @param {ContentId} id
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentremoved = function(id){ return; };

/**
 * The album name to which the audio belongs.
 *
 * @type String
 */
AudioContent.prototype.album = new String();

/**
 * The list of genres to which the audio belongs.
 *
 * @type array
 */
AudioContent.prototype.genres = new array();

/**
 * The list of artists who created the audio.
 *
 * @type array
 */
AudioContent.prototype.artists = new array();

/**
 * The list of composers for the music.
 *
 * @type array
 */
AudioContent.prototype.composers = new array();

/**
 * The lyrics of a song in an audio file.
 *
 * @type AudioContentLyrics
 */
AudioContent.prototype.lyrics = new AudioContentLyrics();

/**
 * The copyright information.
 *
 * @type String
 */
AudioContent.prototype.copyright = new String();

/**
 * The audio bitrate in bits per second. By default, this value is 0.
 *
 * @type Number
 */
AudioContent.prototype.bitrate = new Number();

/**
 * The track number if the audio belongs to an album.
 *
 * @type Number
 */
AudioContent.prototype.trackNumber = new Number();

/**
 * The audio duration in milliseconds.
 *
 * @type Number
 */
AudioContent.prototype.duration = new Number();

/**
 * Called when the method completes successfully.
 *
 * @param {array} playlists
 * @type void
 * @memberOf PlaylistArraySuccessCallback
 * @returns {void}
 */
PlaylistArraySuccessCallback.prototype.onsuccess = function(playlists){ return; };

/**
 * The geographical location where the video has been made.
 *
 * @type SimpleCoordinates
 */
VideoContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The album name to which the video belongs.
 *
 * @type String
 */
VideoContent.prototype.album = new String();

/**
 * The list of artists who created the video.
 *
 * @type array
 */
VideoContent.prototype.artists = new array();

/**
 * The video duration in milliseconds.
 *
 * @type Number
 */
VideoContent.prototype.duration = new Number();

/**
 * The width of a video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.width = new Number();

/**
 * The height of the video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.height = new Number();

/**
 * Updates attributes of content in the content database synchronously.
            <p>
When an application has changed some attributes of the content, this method allows
writing it back to the content database.
            </p>
           
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.update = function(content){ return; };

/**
 * Updates a batch of content attributes in the content database asynchronously.
            <p>
When an application has changed any attributes in the array of content, this method allows writing them
back to the content database.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {array} contents
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.updateBatch = function(contents, successCallback, errorCallback){ return; };

/**
 * Gets a list of content directories.
            <p>
This method returns (via callback) a list of content directory objects. To obtain a list of contents
in a specific directory, use the find() method with the directory ID.
            </p>
            <p>
The errorCallback is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {ContentDirectoryArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.getDirectories = function(successCallback, errorCallback){ return; };

/**
 * Finds contents that satisfy the conditions set by a filter.
            <p>
This method allows searching based on a supplied filter. For more details on AbstractFilter, see the
<a href="tizen.html#::Tizen::AbstractFilter">Tizen</a> module. The filter allows precise searching such
as "return all songs by artist U2, ordered by name".
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {ContentArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ContentDirectoryId} directoryId
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @param {Number} count
 * @param {Number} offset
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.find = function(successCallback, errorCallback, directoryId, filter, sortMode, count, offset){ return; };

/**
 * Scans a file to create or update content in the content database.
            <p>
When an application creates or updates content, this method allows to scan it
and then insert or update the content in the content database.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error detected asynchronously              </li>
            </ul>
           
 *
 * @param {String} contentURI
 * @param {ContentScanSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.scanFile = function(contentURI, successCallback, errorCallback){ return; };

/**
 * Sets a listener to receive notifications of content changes.
 *
 * @param {ContentChangeCallback} changeCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.setChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to unsubscribe from receiving notifications for content changes.
 *
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.unsetChangeListener = function(){ return; };

/**
 * Gets all playlists.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.getPlaylists = function(successCallback, errorCallback){ return; };

/**
 * Creates a new playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If <var>name</var> is empty or is same as the name of an existing playlist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {String} name
 * @param {PlaylistSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Playlist} sourcePlaylist
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.createPlaylist = function(name, successCallback, errorCallback, sourcePlaylist){ return; };

/**
 * Removes a playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.removePlaylist = function(id, successCallback, errorCallback){ return; };

/**
 * Content contained in this playlist item.
 *
 * @type Content
 */
PlaylistItem.prototype.content = new Content();

/**
 * Called when the directory list is retrieved successfully.
 *
 * @param {array} directories
 * @type void
 * @memberOf ContentDirectoryArraySuccessCallback
 * @returns {void}
 */
ContentDirectoryArraySuccessCallback.prototype.onsuccess = function(directories){ return; };

/**
 * Identifier of a playlist.
 *
 * @type PlaylistId
 */
Playlist.prototype.id = new PlaylistId();

/**
 * Name of a playlist (case sensitive and unique).
 * <p>
When <var>name</var> is set, the change is recorded in the database.
            </p>
 *
 * @type String
 */
Playlist.prototype.name = new String();

/**
 * Number of playlist items in the playlist.
 *
 * @type Number
 */
Playlist.prototype.numberOfTracks = new Number();

/**
 * Thumbnail URI of a playlist.
 * <p>
By default, this attribute is set to <var>null</var>. <br/>When <var>thumbnailURI</var> is set, the change is recorded in the database.
            </p>
 *
 * @type String
 */
Playlist.prototype.thumbnailURI = new String();

/**
 * Adds a content item to a playlist.
            <p>
See code example for the <em>createPlaylist()</em> method.
            </p>
           
 *
 * @param {Content} item
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.add = function(item){ return; };

/**
 * Adds tracks to a playlist as a batch, asynchronously.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.addBatch = function(items, successCallback, errorCallback){ return; };

/**
 * Removes a track from a playlist.
 *
 * @param {PlaylistItem} item
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.remove = function(item){ return; };

/**
 * Removes tracks from a playlist as a batch, asynchronously.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.removeBatch = function(items, successCallback, errorCallback){ return; };

/**
 * Gets playlist items from a playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value (e.g <em>count</em> or <em>offset</em> is a negative number)              </li>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistItemArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Number} count
 * @param {Number} offset
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.get = function(successCallback, errorCallback, count, offset){ return; };

/**
 * Changes the play order of all playlist items in the playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: In case the item in the passed <em>items</em> array is not inside this playlist, or the <em>items</em> array does not contain all items from the playlist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.setOrder = function(items, successCallback, errorCallback){ return; };

/**
 * Moves the specified item up or down a specified amount in the play order.
            <p>
If <var>current index + delta</var> is:
            </p>
            <ul>
              <li>
<var>&lt; 0</var> then the item is moved to the first position in the playlist              </li>
              <li>
<var>≥ number of tracks</var> then the item is moved to the last position in the playlist              </li>
            </ul>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: In case the item in the passed <em>items</em> array is not inside this playlist or some item of this playlist is not included in <em>items</em>              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {PlaylistItem} item
 * @param {Number} delta
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.move = function(item, delta, successCallback, errorCallback){ return; };

/**
 * Called when the method completes successfully.
 *
 * @param {Playlist} playlist
 * @type void
 * @memberOf PlaylistSuccessCallback
 * @returns {void}
 */
PlaylistSuccessCallback.prototype.onsuccess = function(playlist){ return; };

/**
 * The opaque content directory identifier.
 *
 * @type ContentDirectoryId
 */
ContentDirectory.prototype.id = new ContentDirectoryId();

/**
 * The directory path on the device.
 *
 * @type String
 */
ContentDirectory.prototype.directoryURI = new String();

/**
 * The directory name.
 *
 * @type String
 */
ContentDirectory.prototype.title = new String();

/**
 * The type of device storage.
 *
 * @type ContentDirectoryStorageType
 */
ContentDirectory.prototype.storageType = new ContentDirectoryStorageType();

/**
 * The last modified date for a directory.
 *
 * @type Date
 */
ContentDirectory.prototype.modifiedDate = new Date();

/**
 * The Content API provides functionality to discover content such as images, videos, music, or others.
 * <p>
It is possible to search for specific content using filters.
The API also supports setting the attributes of specific content.
        </p>
 * <p>
For more information on the Content features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/mediacontent.htm">Content Guide</a>.
        </p>
 * <p>
For more information about how to use the playlist feature of the Content API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/playlist.htm">Playlist Guide</a>.
        </p>
 * <p>
Playlist functionality has been added in Tizen 2.3.
        </p>
 *
 * @type ContentManager
 */
Tizen.prototype.content = new ContentManager();

/**
 * The DownloadManager interface handles requests for downloading. Each step of a download operation is informed through callbacks.
 *
 * @super Object
 * @constructor
 * @return {DownloadManager}
 */
function DownloadManager() {};
DownloadManager.prototype = new Object();

/**
 * This interface defines the default download manager that is instantiated by the object. The object allows access to the functionality of the Download API.
 *
 * @super Object
 * @constructor
 * @return {DownloadManagerObject}
 */
function DownloadManagerObject() {};
DownloadManagerObject.prototype = new Object();

/**
 * The DownloadRequest interface defines the download request object.
 *
 * @super Object
 * @constructor
 * @return {DownloadRequest}
 */
function DownloadRequest() {};
DownloadRequest.prototype = new Object();

/**
 * The DownloadCallback defines notification callbacks for a download state change or progress.
 *
 * @super Object
 * @constructor
 * @return {DownloadCallback}
 */
function DownloadCallback() {};
DownloadCallback.prototype = new Object();

/**
 * Starts a download operation with the specified URL information.
 *
 * @param {DownloadRequest} downloadRequest
 * @param {DownloadCallback} downloadCallback
 * @type Number
 * @memberOf DownloadManager
 * @returns {Number}
 */
DownloadManager.prototype.start = function(downloadRequest, downloadCallback){ var ret = new Number(); return ret; };

/**
 * Cancels an ongoing download operation that is specified by the parameter.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.cancel = function(downloadId){ return; };

/**
 * Pauses an ongoing download operation that is specified by the parameter. The paused download operation can be resumed later by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.pause = function(downloadId){ return; };

/**
 * Resumes a paused download operation that is specified by the parameter.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.resume = function(downloadId){ return; };

/**
 * Gets the download state of an operation synchronously with the specified ID.
 *
 * @param {Number} downloadId
 * @type DownloadState
 * @memberOf DownloadManager
 * @returns {DownloadState}
 */
DownloadManager.prototype.getState = function(downloadId){ var ret = new DownloadState(); return ret; };

/**
 * Gets the DownloadRequest object from a given ID.
 *
 * @param {Number} downloadId
 * @type DownloadRequest
 * @memberOf DownloadManager
 * @returns {DownloadRequest}
 */
DownloadManager.prototype.getDownloadRequest = function(downloadId){ var ret = new DownloadRequest(); return ret; };

/**
 * Gets the MIME type of the downloaded file.
 *
 * @param {Number} downloadId
 * @type String
 * @memberOf DownloadManager
 * @returns {String}
 */
DownloadManager.prototype.getMIMEType = function(downloadId){ var ret = new String(); return ret; };

/**
 * Sets the download callback to the download operation of the given ID. It's possible to change or register the listener of the download operation using the saved ID.
 *
 * @param {Number} downloadId
 * @param {DownloadCallback} downloadCallback
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.setListener = function(downloadId, downloadCallback){ return; };

/**
 * This API provides methods to asynchronously download the contents of a URL to a storage.
 * <p>
For more information on the Download features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/download.htm">Download Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/download
 * @type DownloadManager
 */
DownloadManagerObject.prototype.download = new DownloadManager();

/**
 * An attribute to store the URL of the object to download.
 *
 * @type String
 */
DownloadRequest.prototype.url = new String();

/**
 * An attribute to store the folder path of the destination folder to which a requested file object will be downloaded.
 * <p>
If the destination is not specified or is an empty string, the file will be downloaded to the default storage: "Downloads". For more information, see <a href="filesystem.html">Filesystem API</a>.
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
DownloadRequest.prototype.destination = new String();

/**
 * An attribute to store the file name for the specified URL.
 * <p>
If the file name is not given or is an empty string, the original file name from the URL is used.
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
DownloadRequest.prototype.fileName = new String();

/**
 * An attribute to store the allowed network type.
 * <p>
If the network type is not given, all network types are allowed.
            </p>
 * <p>
The default value is <var>ALL</var>.
            </p>
 *
 * @type DownloadNetworkType
 */
DownloadRequest.prototype.networkType = new DownloadNetworkType();

/**
 * An attribute to store extra HTTP header fields.
 * <p>
For more information about HTTP header fields, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2">RFC-2616</a>            </p>
 * <p>
The default value is an empty object.
            </p>
 *
 * @type DownloadHTTPHeaderFields
 */
DownloadRequest.prototype.httpHeader = new DownloadHTTPHeaderFields();

/**
 * Called when a download is successful and it is called multiple times as the download progresses. The interval between the callback is platform-dependent. When the download is started, the can be .
 *
 * @param {Number} downloadId
 * @param {Number} receivedSize
 * @param {Number} totalSize
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onprogress = function(downloadId, receivedSize, totalSize){ return; };

/**
 * Called when the download operation is paused by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onpaused = function(downloadId){ return; };

/**
 * Called when the download operation is canceled by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.oncanceled = function(downloadId){ return; };

/**
 * Called when the download operation is completed with the final full path. If the same file name already exists in the destination, it is changed according to the platform policy and delivered in this callback.
 *
 * @param {Number} downloadId
 * @param {String} fullPath
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.oncompleted = function(downloadId, fullPath){ return; };

/**
 * Called when the download operation fails.
 *
 * @param {Number} downloadId
 * @param {WebAPIError} error
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onfailed = function(downloadId, error){ return; };

/**
 * This API provides methods to asynchronously download the contents of a URL to a storage.
 * <p>
For more information on the Download features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/download.htm">Download Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/download
 * @type DownloadManager
 */
Tizen.prototype.download = new DownloadManager();

/**
 * The ExifThumbnailSuccessCallback interface provides a success callback that is invoked when the Exif thumbnail has been retrieved. This callback interface specifies a success method with the URI for the thumbnail as an input parameter. It is used in exif.getThumbnail().
 *
 * @super Object
 * @constructor
 * @return {ExifThumbnailSuccessCallback}
 */
function ExifThumbnailSuccessCallback() {};
ExifThumbnailSuccessCallback.prototype = new Object();

/**
 * The ExifInformation interface implements the object.
          <p>
When the format of a value is given in the attribute description then this format should be followed when updating values.
          </p>
          <p>
Every Exif related attribute is nullable - null means that this information is missing in the file.
By setting an attribute to null and saving <em>ExifInformation</em> one can remove that Exif tag from the file.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ExifInformation}
 */
function ExifInformation() {};
ExifInformation.prototype = new Object();

/**
 * The ExifManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the Exif data of a JPEG file.
 *
 * @super Object
 * @constructor
 * @return {ExifManagerObject}
 */
function ExifManagerObject() {};
ExifManagerObject.prototype = new Object();

/**
 * The ExifInformationSuccessCallback interface provides a success callback that is invoked when the Exif information object has been retrieved. This callback interface specifies a success method with an object as an input parameter. It is used in exif.getExifInfo().
 *
 * @super Object
 * @constructor
 * @return {ExifInformationSuccessCallback}
 */
function ExifInformationSuccessCallback() {};
ExifInformationSuccessCallback.prototype = new Object();

/**
 * The ExifManager interface provides methods to retrieve the object and save the Exif data of the object in a JPEG file.
          <p>
It provides access to the API functionalities through the <em>tizen.exif</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ExifManager}
 */
function ExifManager() {};
ExifManager.prototype = new Object();

/**
 * Called when the thumbnail of the JPEG file has been successfully retrieved.
 *
 * @param {String} uri
 * @type void
 * @memberOf ExifThumbnailSuccessCallback
 * @returns {void}
 */
ExifThumbnailSuccessCallback.prototype.onsuccess = function(uri){ return; };

/**
 * URI of the image.
 * <p>
The path to the file from which <em>ExifInformation</em> data is collected.
            </p>
 *
 * @type String
 */
ExifInformation.prototype.uri = new String();

/**
 * Width of the image i.e. the number of points (pixels) per image line.
 * <p>
Note if the value of this attribute is changed, the new value is not verified against the actual size of the image.
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.width = new Number();

/**
 * Height of the image i.e. the number of lines in the image.
 * <p>
Note if the value of this attribute is changed, the new value is not verified against the actual size of the image.
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.height = new Number();

/**
 * Name of the camera manufacturer.
 *
 * @type String
 */
ExifInformation.prototype.deviceMaker = new String();

/**
 * Model name or model number of the camera or input device.
 *
 * @type String
 */
ExifInformation.prototype.deviceModel = new String();

/**
 * Date and time when the picture was taken.
 *
 * @type Date
 */
ExifInformation.prototype.originalTime = new Date();

/**
 * Orientation of the image the image when displayed.
 * <p>
This attribute shows the relation between the stored image data and the visual content orientation.
In other words - how a stored image should be oriented when presented to the user.
            </p>
 *
 * @type ImageContentOrientation
 */
ExifInformation.prototype.orientation = new ImageContentOrientation();

/**
 * The f-number when the image was taken.
 * <p>
Exif specification: "Conversion is not made to the focal length of a 35 mm film".
            </p>
 * <p>
The <a href="http://en.wikipedia.org/wiki/F-number">f-number</a> is the ratio of the lens' focal length to the diameter of the entrance pupil.
F-number is also called focal ratio, f-ratio, f-stop, or relative aperture.
Example values: 1.4, 2, 2.8, 4, 5.6, 8, 11 ...
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.fNumber = new Number();

/**
 * Photo sensitivity (also called ISO speed and ISO latitude) of the camera or input device.
 * <p>
Example values: 80, 100, 200, 400, 800, 1600, 3200 ..
            </p>
 *
 * @type array
 */
ExifInformation.prototype.isoSpeedRatings = new array();

/**
 * Exposure time, given in seconds.
 * <p>
If exposure time is below one second it is expressed as 1/x.
For example: 1 second exposure is "1", 0.25s is "1/4".
            </p>
 *
 * @type String
 */
ExifInformation.prototype.exposureTime = new String();

/**
 * Exposure balance program used by the camera to set exposure when the picture was taken.
 *
 * @type ExposureProgram
 */
ExifInformation.prototype.exposureProgram = new ExposureProgram();

/**
 * Boolean value that indicates whether flash was fired when the picture was taken (true: flash fired).
 *
 * @type Boolean
 */
ExifInformation.prototype.flash = new Boolean();

/**
 * Focal length of the lens, given in mm.
 *
 * @type Number
 */
ExifInformation.prototype.focalLength = new Number();

/**
 * White balance mode set when the picture was taken.
 *
 * @type WhiteBalanceMode
 */
ExifInformation.prototype.whiteBalance = new WhiteBalanceMode();

/**
 * Latitude and longitude of the camera (from GPS) when the picture was taken.
 *
 * @type SimpleCoordinates
 */
ExifInformation.prototype.gpsLocation = new SimpleCoordinates();

/**
 * Altitude (from GPS) of the camera when the picture was taken.
 * <p>
This value is expressed in meters above sea level (can be negative).
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.gpsAltitude = new Number();

/**
 * Name of the method used for finding the location.
 *
 * @type String
 */
ExifInformation.prototype.gpsProcessingMethod = new String();

/**
 * Date and time information relative to UTC (Universal Time Coordinated) provided by GPS when the photo was taken.
 *
 * @type TZDate
 */
ExifInformation.prototype.gpsTime = new TZDate();

/**
 * User comment.
 *
 * @type String
 */
ExifInformation.prototype.userComment = new String();

/**
 * The Exif API provides interfaces and methods for manipulating data from a JPEG file. The object provides methods to retrieve the object from a JPEG file and save the Exif data from the object in the JPEG file. The object provides functionality to get and set the Exif attributes corresponding to the Exif tag. Changing the value of the attribute in the object stores the Exif data in the object. It does not change data in the JPEG file. For applying the modified Exif data to the JPEG file, the saveExifInfo() method of the object should be called with the object that has the modified Exif data.
 * <p>
For more information about how to use Exif API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/exif.htm">Exif Guide</a>.
        </p>
 *
 * @type ExifManager
 */
ExifManagerObject.prototype.exif = new ExifManager();

/**
 * Called when the Exif information object has been successfully retrieved.
 *
 * @param {ExifInformation} exifInfo
 * @type void
 * @memberOf ExifInformationSuccessCallback
 * @returns {void}
 */
ExifInformationSuccessCallback.prototype.onsuccess = function(exifInfo){ return; };

/**
 * Gets the object to manipulate the Exif data in a JPEG file.
            <p>
This function returns (via callback) the <em>ExifInformation</em> object that contains the Exif data in the JPEG file.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found or the file does not contain Exif data              </li>
              <li>
IOError: If access to the image file is denied due to insufficient permissions              </li>
              <li>
InvalidValuesError: If any input parameter contains invalid values              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {String} uri
 * @param {ExifInformationSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.getExifInfo = function(uri, successCallback, errorCallback){ return; };

/**
 * Saves the Exif data of the object into the JPEG file.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found              </li>
              <li>
InvalidValuesError: If any input parameter contains invalid values              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {ExifInformation} exifInfo
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.saveExifInfo = function(exifInfo, successCallback, errorCallback){ return; };

/**
 * Gets the thumbnail of the specified JPEG file. If there is no thumbnail in the JPEG file, is returned.
            <p>
<em>successCallback</em> is invoked with a URI as the first argument.
This URI is a <a href="http://en.wikipedia.org/wiki/Data_URI_scheme">data URI</a>.
It can be used as an src attribute value of the img element.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found              </li>
              <li>
IOError: If access to the thumbnail file is denied due to insufficient permissions              </li>
              <li>
InvalidValuesError: If any of the input parameters contains an invalid value              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {String} uri
 * @param {ExifThumbnailSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.getThumbnail = function(uri, successCallback, errorCallback){ return; };

/**
 * The Exif API provides interfaces and methods for manipulating data from a JPEG file. The object provides methods to retrieve the object from a JPEG file and save the Exif data from the object in the JPEG file. The object provides functionality to get and set the Exif attributes corresponding to the Exif tag. Changing the value of the attribute in the object stores the Exif data in the object. It does not change data in the JPEG file. For applying the modified Exif data to the JPEG file, the saveExifInfo() method of the object should be called with the object that has the modified Exif data.
 * <p>
For more information about how to use Exif API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/exif.htm">Exif Guide</a>.
        </p>
 *
 * @type ExifManager
 */
Tizen.prototype.exif = new ExifManager();

/**
 * The FileStringSuccessCallback callback interface specifies a success callback with a DOMString object as input argument.
          <p>
It is used in asynchronous operations, such as File.readAsText().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStringSuccessCallback}
 */
function FileStringSuccessCallback() {};
FileStringSuccessCallback.prototype = new Object();

/**
 * The FileSystemStorageSuccessCallback callback interface specifies a success callback with a object as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.getStorage() and FileSystemManager.addStorageStateChangeListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageSuccessCallback}
 */
function FileSystemStorageSuccessCallback() {};
FileSystemStorageSuccessCallback.prototype = new Object();

/**
 * The FileSystemManager interface provides access to the Filesystem API.
          <p>
This manager interface exposes the Filesystem base API, and provides functionalities, such
as determining root and default locations, resolving a given location into a file handle, and registering filesystem listeners for filesystem events.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManager}
 */
function FileSystemManager() {};
FileSystemManager.prototype = new Object();

/**
 * The FileStream interface represents a handle to a File opened for read and/or write operations. Read and write operations are performed relative to a position attribute, which is a pointer that represents the current position in the file.
          <p>
A series of read/write methods are available that permit both binary and text to be processed.
          </p>
          <p>
Once a file stream is closed, any operation attempt made on this stream results in a standard JavaScript error.
          </p>
          <p>
The read/write operations in this interface do not throw any security exceptions as the access rights are expected to be granted through the initial resolve() method or through the openStream() method of the <em>File </em>interface. Therefore, all actions performed on a successfully resolved File and FileStream are expected to succeed. This avoids successive asynchronous calls and may potentially increase application for a user.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStream}
 */
function FileStream() {};
FileStream.prototype = new Object();

/**
 * The FileSuccessCallback interface defines file system success callback with a object as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.resolve(), copying, moving, and deleting files.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSuccessCallback}
 */
function FileSuccessCallback() {};
FileSuccessCallback.prototype = new Object();

/**
 * The File interface represents the file abstraction in use. A file handle represents a file if the property is , and if the property is , the file handle represents a directory. If a file handle represents a directory, it can address files and directories.
          <p>
The file object permissions for the file object location and tree rooted
at that location depends upon the mode defined in the resolve method.
When a File object creates a child File object,
the new File object inherits its access rights from
the parent object without any reference to the security framework, as
noted in certain methods of File.
          </p>
          <p>
A file handle representing a file can be opened for I/O operations,
such as reading and writing.
          </p>
          <p>
A file handle representing a directory can be used for listing all
files and directories rooted as the file handle location.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {File}
 */
function File() {};
File.prototype = new Object();

/**
 * The FileSystemStorage interface gives additional information about a storage, such as if the device is mounted, if it is a removable drive or not, or the device's name.
          <p>
To retrieve the mount point, the resolve() method should be used using the label as argument.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorage}
 */
function FileSystemStorage() {};
FileSystemStorage.prototype = new Object();

/**
 * The FileSystemManagerObject interface defines what is instantiated by the Tizen object.
          <p>
There is a <em>tizen.filesystem </em>object that allows accessing the functionality of the Filesystem API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManagerObject}
 */
function FileSystemManagerObject() {};
FileSystemManagerObject.prototype = new Object();

/**
 * The FileStreamSuccessCallback interface specifies a success callback with a object as input argument.
          <p>
It is used by asynchronous methods, such as File.openStream().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStreamSuccessCallback}
 */
function FileStreamSuccessCallback() {};
FileStreamSuccessCallback.prototype = new Object();

/**
 * The FileSystemStorageArraySuccessCallback callback interface specifies a success callback with an array of FileSystemStorage objects as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.listStorages().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageArraySuccessCallback}
 */
function FileSystemStorageArraySuccessCallback() {};
FileSystemStorageArraySuccessCallback.prototype = new Object();

/**
 * The FileArraySuccessCallback interface defines file system specific success callback for listing methods.
          <p>
This callback interface specifies a success callback with a function taking an array of <em>File </em>objects as input argument. It is used in asynchronous methods, such as File.listFiles().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileArraySuccessCallback}
 */
function FileArraySuccessCallback() {};
FileArraySuccessCallback.prototype = new Object();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {String} fileStr
 * @type void
 * @memberOf FileStringSuccessCallback
 * @returns {void}
 */
FileStringSuccessCallback.prototype.onsuccess = function(fileStr){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {FileSystemStorage} storage
 * @type void
 * @memberOf FileSystemStorageSuccessCallback
 * @returns {void}
 */
FileSystemStorageSuccessCallback.prototype.onsuccess = function(storage){ return; };

/**
 * The maximum path length limit for the current platform.
 *
 * @type Number
 */
FileSystemManager.prototype.maxPathLength = new Number();

/**
 * Resolves a location to a file handle after validating it.
            <p>
A location can contain a virtual path like '<var>documents/some_file.txt</var>'
or a file's URI '<var>file:///my_strange_path/some_file.png</var>'.
            </p>
            <p>
The list of root locations that must be supported by a compliant implementation are:
            </p>
            <ul>
              <li>
documents - The default folder in which text documents (such as pdf, doc...) are stored by default in a device. For example, in some platforms it corresponds to the "My Documents" folder.              </li>
              <li>
images - The default folder in which still images, like pictures (in formats including jpg, gif, png, etc.), are stored in the device by default. For example, in some platforms it corresponds to the "My Images" folder.              </li>
              <li>
music - The default folder in which sound clips (in formats including mp3, aac, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Music" folder.              </li>
              <li>
videos - The default folder in which video clips (in formats including avi, mp4, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Videos" folder.              </li>
              <li>
downloads - The default folder in which downloaded files (from sources including browser, e-mail client, etc.) are stored by default in the device. For example, in some platforms it corresponds to the "Downloads" folder.              </li>
              <li>
ringtones: The default folder in which ringtones (such as mp3, etc) are stored in the device.              </li>
              <li>
camera : The default folder in which pictures and videos taken by a device are stored.              </li>
              <li>
wgt-package - The read-only folder to which the content of a widget file is extracted.              </li>
              <li>
wgt-private - The private folder in which a widget stores its information. This folder must be accessible only to the same widget and other widgets or applications must not be able to access the stored information.              </li>
              <li>
wgt-private-tmp - Temporary, the private folder in which a widget can store data that is available during a widget execution cycle. Content of this folder can be removed from this directory when the widget is closed or the Web Runtime is restarted. This folder must be accessible only to the same widget and other widgets or applications must not be able to access it.              </li>
            </ul>
            <p>
The <em>mode </em>parameter specifies whether the resulting <em>File </em>object has read-only access ("r" access), read and write access ("rw" access), append access ("a" access), or write access ("w" access) to the root location containing directory tree.
Permission for the requested access is obtained from the security framework. Once the resulting <em>File </em>object has access, access is inherited by any other <em>File </em>objects that are derived from this instance without any further reference to the security framework, as noted in descriptions of certain methods of <em>File</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.
For example, the mode is "w" for the read-only virtual roots (wgt-package and ringtones).              </li>
              <li>
NotFoundError - If the location input argument does not correspond to a valid location.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} location
 * @param {FileSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileMode} mode
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.resolve = function(location, onsuccess, onerror, mode){ return; };

/**
 * Gets information about a storage based on its label.For example: "MyThumbDrive", "InternalFlash".
            <p>
The <em>onsuccess </em>method receives the data structure as an input argument containing additional information about the drive.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If no drive was found with the given label.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.               </li>
            </ul>
           
 *
 * @param {String} label
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.getStorage = function(label, onsuccess, onerror){ return; };

/**
 * Lists the available storages (both internal and external) on a device. The onsuccess method receives a list of the data structures as input argument containing additional information about each drive found. It can get storages that would have a label named as 'internal0', virtual roots (images, documents,...), 'removable1', 'removable2'. 'removable1' label is used to resolve sdcard and 'removable2' label is used to resolve USB host, if supported. The vfat filesystem used to sdcard filesystem widely is not case-sensitive. If you want to handle the file on sdcard, you need to consider case-sensitive filenames are regarded as same name.
            <p>
Labels can differ depending on platform implementation.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileSystemStorageArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.listStorages = function(onsuccess, onerror){ return; };

/**
 * Adds a listener to subscribe to notifications when a change in storage state occurs.
            <p>
The most common usage for this method is to watch for any additions and removals of external storages.
            </p>
            <p>
When executed, it returns a subscription identifier that identifies the watch operation. After returning the identifier, the watch operation is started asynchronously. The onsuccess method will be invoked every time a storage state changes. If the attempt fails, the onerror if present will be invoked with the relevant error type.
            </p>
            <p>
The watch operation must continue until the removeStorageStateChangeListener() method is called with the corresponding subscription identifier.
            </p>
           
 *
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf FileSystemManager
 * @returns {Number}
 */
FileSystemManager.prototype.addStorageStateChangeListener = function(onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Removes a listener to unsubscribe from a storage watch operation.
            <p>
If the <em>watchId </em>argument is valid and corresponds to a subscription already in place, the watch process will be stopped and no further callbacks will be invoked.
Otherwise, the method call has no effect.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.removeStorageStateChangeListener = function(watchId){ return; };

/**
 * The flag indicating whether the current file pointer is at the end of the file.
 * <p>
If set to <var>true</var>, this attribute indicates that the file pointer is at the end of the file.
            </p>
 * <p>
If set to <var>false</var>, this attribute indicates that the file pointer is not at the end of the file and so it is anywhere within the file.
            </p>
 *
 * @type Boolean
 */
FileStream.prototype.eof = new Boolean();

/**
 * The flag indicating the stream position for reads/writes.
 * <p>
The stream position is an offset of bytes from the start of the file stream. When invoking an operation that reads or writes from the stream, the operation will take place from the byte defined by this <em>position </em>attribute. If the read or write operation is successful, the position of the stream is advanced by the number of bytes read or written. If the read/write operation is not successful, the position of the stream is unchanged.
            </p>
 *
 * @type Number
 */
FileStream.prototype.position = new Number();

/**
 * The number of bytes that are available for reading from the stream.
 * <p>
The number of bytes available for reading is the maximum amount of bytes that can be read in the next read operation.
It corresponds to the number of bytes available after the file pointer denoted by the <em>position </em>attribute.
            </p>
 * <p>
<var>-1 </var>if EOF is <var>true</var>.
            </p>
 *
 * @type Number
 */
FileStream.prototype.bytesAvailable = new Number();

/**
 * Closes this FileStream.
            <p>
Flushes any pending buffered writes and closes the File. Always succeeds.
Note that pending writes might not succeed.
            </p>
           
 *
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.close = function(){ return; };

/**
 * Reads the specified number of characters from the position of the file pointer in a FileStream and returns the characters as a string. The resulting string length might be shorter than if EOF is .
 *
 * @param {Number} charCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.read = function(charCount){ var ret = new String(); return ret; };

/**
 * Reads the specified number of bytes from a FileStream.
 *
 * @param {Number} byteCount
 * @type array
 * @memberOf FileStream
 * @returns {array}
 */
FileStream.prototype.readBytes = function(byteCount){ var ret = new array(); return ret; };

/**
 * Reads the specified number of bytes from this FileStream, encoding the result in base64.
 *
 * @param {Number} byteCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.readBase64 = function(byteCount){ var ret = new String(); return ret; };

/**
 * Writes the specified DOMString to a FileStream.
 *
 * @param {String} stringData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.write = function(stringData){ return; };

/**
 * Writes the specified bytes to this FileStream.
 *
 * @param {array} byteData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBytes = function(byteData){ return; };

/**
 * Writes the result to this FileStream after converting the specified base64 DOMString to bytes.
 *
 * @param {String} base64Data
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBase64 = function(base64Data){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {File} file
 * @type void
 * @memberOf FileSuccessCallback
 * @returns {void}
 */
FileSuccessCallback.prototype.onsuccess = function(file){ return; };

/**
 * The parent directory handle.
 * <p>
This attribute is set to<var>null</var> if there is no parent directory. This also implies that this directory represents a root location.
            </p>
 *
 * @type File
 */
File.prototype.parent = new File();

/**
 * The file/directory access state in the filesystem.
 * <p>
This attribute is set to:
            </p>
 * <ul>
 * <li>- if object has read-only access at its location.
 * <li>- if object has write access at its location.
 * </ul>
 * <p>
This attribute represents the actual state of a file or directory in the filesystem. Its value is not affected by the mode used in FileSystemManager.resolve() that was used to create the <em>File </em>object from which this <em>File </em>object was obtained.
            </p>
 *
 * @type Boolean
 */
File.prototype.readOnly = new Boolean();

/**
 * The flag indicating whether it is a file.
 * <p>
This attribute can have the following values:
            </p>
 * <ul>
 * <li>if this handle is a file
 * <li>if this handle is a directory
 * </ul>
 *
 * @type Boolean
 */
File.prototype.isFile = new Boolean();

/**
 * The flag indicating whether it is a directory.
 * <p>
This attribute can have the following values:
            </p>
 * <ul>
 * <li>if this handle is a directory
 * <li>if this handle is a file
 * </ul>
 *
 * @type Boolean
 */
File.prototype.isDirectory = new Boolean();

/**
 * The timestamp when a file is first created in the filesystem.
 * <p>
This timestamp is equivalent to the timestamp when a call to createFile() succeeds.
            </p>
 * <p>
If the platform does not support this attribute, it will
be <var>null</var>.
            </p>
 * <p>
It is unspecified and platform-dependent if the creation
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.created = new Date();

/**
 * The timestamp when the most recent modification is made to a file, usually when the last write operation succeeds.
 * <p>
Opening a file for reading does not change the modification timestamp.
            </p>
 * <p>
If the platform does not support this attribute, it will be <em>null</em>.
            </p>
 * <p>
It is unspecified and platform-dependent if the modified
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.modified = new Date();

/**
 * The path of a file after excluding its file name.
 * <p>
It begins with the name of the root containing the file, followed by the path, including the directory containing the file, but excluding the file name.
            </p>
 * <p>
Except in some special cases of the File representing the root itself, the last
character is always '/'.
            </p>
 * <p>
For example, if a file is located at music/ramones/volume1/RockawayBeach.mp3,
the path is music/ramones/volume1/.
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the path is
music/ramones/.
            </p>
 * <p>
For the virtual roots, the path is same as the name of the virtual root.
For example, if the root is music, then the path is music. If the root is documents, then the path is documents.
            </p>
 *
 * @type String
 */
File.prototype.path = new String();

/**
 * The file name after excluding the root name and any path components.
 * <p>
This is the name of this file, excluding the root name and any other path components.
            </p>
 * <p>
For example, if a file is located at
music/ramones/volume1/RockawayBeach.mp3, the <em>name </em> is 'RockawayBeach.mp3'.
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the
<em>name </em> is be 'volume1'.
            </p>
 * <p>
For the special case of the root itself, the <em>name </em> is an empty string.
            </p>
 *
 * @type String
 */
File.prototype.name = new String();

/**
 * The full path of a file.
 * <p>
It begins with the name of the root containing the file,
and including the name of the file or directory itself.
            </p>
 * <p>
For instance, if the RockawayBeach.mp3 file is located at music/ramones/volume1/, then the <em>fullPath </em>is music/ramones/volume1/RockawayBeach.mp3.
            </p>
 * <p>
For a directory, if the volume1 directory is located at music/ramones/, then the <em>fullPath </em>is music/ramones/volume1.
            </p>
 * <p>
For the special case of the root itself, if the root is music, then the <em>fullPath </em>is music.
            </p>
 * <p>
The <em>fullPath </em>is always equal to path + name.
            </p>
 *
 * @type String
 */
File.prototype.fullPath = new String();

/**
 * The size of this file, in bytes.
 * <p>
If an attempt to read this attribute for a directory is made, <var>undefined</var> is returned. To retrieve the number of files and directories contained in the directory, use the <em>length </em>attribute.
            </p>
 *
 * @type Number
 */
File.prototype.fileSize = new Number();

/**
 * The number of files and directories contained in a file handle.
 * <p>
If an attempt to read this attribute for a file is made, <var>undefined</var> is returned. To retrieve the size of a file, use the <em>fileSize </em>attribute.
            </p>
 *
 * @type Number
 */
File.prototype.length = new Number();

/**
 * Returns a URI for a file to identify an entry (such as using it as the src attribute on an HTML img element). The URI has no specific expiration, it should be valid at least as long as the file exists.
            <p>
If that URI corresponds to any of the public virtual roots (that is
images, videos, music, documents, and downloads) the URI
must be globally unique and could be used by any widget.
            </p>
            <p>
If that URI corresponds to a file located in any a widget's private areas (such as wgt-package, wgt-private, wgt-private-tmp),
the generated URI must be unique for that file and for the widget making the request (such as including some derived from the widget ID in the URI).
These URIs must not be accessible to other widgets, apart from the one invoking this method.
            </p>
           
 *
 * @type String
 * @memberOf File
 * @returns {String}
 */
File.prototype.toURI = function(){ var ret = new String(); return ret; };

/**
 * Lists all files in a directory.
            <p>
The list of files is passed as a File[] in onsuccess() and contains directories and files. However, the directories "." and ".." must not be returned. Each <em>File </em>object that is part of the array must inherit all the access rights (that is, one of the values in FileMode) from the <em>File </em>object in which this method is invoked.
            </p>
            <p>
If the filter is passed and contains valid values, only those directories and files in the directory that match the filter criteria specified in the <em>FileFilter </em>interface must be returned in the onsuccess() method. If no filter is passed, the filter is <var>null </var>or <var>undefined</var>, or the filter contains invalid values, the implementation must return the full list of files in the directory.
            </p>
            <p>
If the directory does not contain any files or directories, or the filter criteria does not matched with any files or directories, the onsuccess() is invoked with an empty array.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
IOError - If the operation is launched on a file (not a directory).              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileFilter} filter
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.listFiles = function(onsuccess, onerror, filter){ return; };

/**
 * Opens the file in the given mode supporting a specified encoding.
            <p>
This operation is performed asynchronously. If the file is opened successfully, the onsuccess() method is invoked with a <em>FileStream</em> that can be used for reading and writing the file, depending on the mode. The returned <em>FileStream </em>instance includes a file pointer, which represents the current position in the file. The file pointer, by default, is at the start of the file, except in the case of opening a file in append ("a") mode, in which case the file pointer points to the end of the file.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
IOError - The operation is launched on a directory (not a file), the file is not valid or it does not exist.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileMode} mode
 * @param {FileStreamSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.openStream = function(mode, onsuccess, onerror, encoding){ return; };

/**
 * Reads the content of a file as a DOMString.
            <p>
If the operation is successfully executed, the onsuccess() method is invoked and a DOMString is passed as input parameter that represents the file content in the format determined by the <em>encoding </em>parameter.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
IOError - If the operation is launched on a directory (not a file), the file is not valid, or the file does not exist.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileStringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.readAsText = function(onsuccess, onerror, encoding){ return; };

/**
 * Copies (and overwrites if possible and specified) a file or a directory from a specified location to another specified location.
            <p>
The copy of the file or directory identified by the <em>originFilePath </em>parameter must be created in the path passed in the <em>destinationFilePath </em>parameter.
            </p>
            <p>
The file or directory to copy must be under the Directory from which the method is invoked, otherwise the operation must not be performed.
            </p>
            <p>
If the copy is performed successfully, the onsuccess() method is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError - If the <em>originFilePath </em>does not correspond to a valid file or <em>destinationPath </em>is not a valid path.              </li>
              <li>
IOError - If the file in which the copyTo() method is invoked is a file (and not a directory), <em>originFilePath </em>corresponds to a file or directory in use by another process, <em>overwrite </em>parameter is <var>false</var> and <em>destinationFilePath </em>corresponds to an existing file or directory.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.copyTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Moves (and overwrites if possible and specified) a file or a directory from a specified location to another. This operation is different from instantiating copyTo() and then deleting the original file, as on certain platforms, this operation does not require extra disk space.
            <p>
The file or directory identified by the <em>originFilePath </em>parameter is moved to the path passed in the <em>destinationFilePath </em>parameter.
            </p>
            <p>
The file to move must be under the directory from which the method is invoked, else the operation can not be performed.
            </p>
            <p>
If the file or directory is moved successfully, the onsuccess() method is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError - If <em>originFilePath </em>does not correspond to a valid file or <em>destinationPath </em>is not a valid path.              </li>
              <li>
IOError - If the <em>File </em>in which the moveTo() method is invoked is a file (not a directory), <em>originFilePath </em>corresponds to a file or directory in use by another process, overwrite parameter is <var>false</var> and <em>destinationFilePath </em>corresponds to an existing file or directory.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.moveTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Creates a new directory.
            <p>
A new directory will be created relative to the current
directory that this operation is performed on. The implementation will attempt to
create all necessary sub-directories specified in the dirPath, as well. The use of "."
or ".." in path components is not supported.
            </p>
            <p>
This operation can only be performed on file handlers that represent a directory (that is, <em>isDirectory</em> == <var>true</var>).
            </p>
            <p>
If the directory is successfully created, it will be returned.
            </p>
            <p>
In case the directory cannot be created, an error must be thrown with the appropriate error type.
            </p>
           
 *
 * @param {String} dirPath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createDirectory = function(dirPath){ var ret = new File(); return ret; };

/**
 * Creates a empty new file in a specified location that is relative to the directory indicated by current object's attribute.
            <p>
The use of "." or ".." in path components is not supported. This operation can only be performed on file handlers that represent a directory (that is, <em>isDirectory </em>== <var>true</var>).
            </p>
            <p>
If the file is successfully created, a file handler must be returned by this method.
            </p>
            <p>
In case the file cannot be created, an error must be thrown with the appropriate error type.
            </p>
           
 *
 * @param {String} relativeFilePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createFile = function(relativeFilePath){ var ret = new File(); return ret; };

/**
 * Resolves an existing file or directory relative to the current directory this operation is performed on, and returns a file handle for it.
            <p>
The filePath is not allowed to contain the "." or ".." directories.
            </p>
            <p>
The encoding of file paths is <a href="http://www.ietf.org/rfc/rfc2279.txt">UTF-8</a>.
            </p>
           
 *
 * @param {String} filePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.resolve = function(filePath){ var ret = new File(); return ret; };

/**
 * Deletes a specified directory and directory tree if specified.
            <p>
This method attempts to asynchronously delete a directory or directory tree under the current directory.
            </p>
            <p>
If the <em>recursive </em>parameter is set to <var>true</var>, all the directories and files under the specified directory must be deleted. If the <em>recursive </em>parameter is set to <var>false</var>, the directory is only deleted if it is empty, otherwise an IOError error type will be passed in onerror().
            </p>
            <p>
If the deletion is performed successfully, the onsuccess() is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError -If the passed directory does not correspond to a valid directory.              </li>
              <li>
IOError - If the <em>File </em>in which the delete method is invoked is a file (and not a directory), the directory is in use by another process or the directory is not empty and <em>recursive </em>argument is <var>false</var>.<br/>This code is also used if a recursive deletion partially fails and any data deleted so far cannot be recovered. This may occur due to the lack of filesystem permissions or if any directories or files are already opened by other processes.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} directoryPath
 * @param {Boolean} recursive
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteDirectory = function(directoryPath, recursive, onsuccess, onerror){ return; };

/**
 * Deletes a specified file.This function attempts to asynchronously delete a file under the current directory.
            <p>
If the deletion is performed successfully, the onsuccess() is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError - If the file does not correspond to a valid file.              </li>
              <li>
IOError - If the file in which the delete() method is invoked is a file (not a directory), the file is in use by another process, or there is no permission in the file system.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} filePath
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteFile = function(filePath, onsuccess, onerror){ return; };

/**
 * The storage name.
 * <p>
This attribute is used as an input for methods such as getStorage() and also used as <em>location</em> parameter for File.resolve() and FileSystemManager.resolve().
            </p>
 *
 * @type String
 */
FileSystemStorage.prototype.label = new String();

/**
 * The storage type as internal or external.
 *
 * @type FileSystemStorageType
 */
FileSystemStorage.prototype.type = new FileSystemStorageType();

/**
 * The storage state as mounted or not.
 *
 * @type FileSystemStorageState
 */
FileSystemStorage.prototype.state = new FileSystemStorageState();

/**
 * The Filesystem API provides access to a device's filesystem.
 * <p>
The filesystem is represented as an abstract collection of disjointed filesystem virtual
root locations, each corresponding to a specific location in the device
filesystem. The filesystem API exposes the hierarchies below these root
locations as a single virtual filesystem, but provides no access to other
parts of the device filesystem.
        </p>
 * <p>
Each virtual root has a string name. Each file or directory within the virtual
filesystem is addressed using a fully-qualified path of the form:
<em>&lt;root name&gt;/&lt;path&gt;</em> where <em>&lt;rootname&gt;</em> is
the name of the virtual root and <em>&lt;path&gt;</em> is the path to the file or
directory relative to that root.
        </p>
 * <p>
The following virtual roots must be supported:
        </p>
 * <ul>
 * <li>images - the location for images
 * <li>videos - the location for videos
 * <li>music - the location for sounds
 * <li>documents - the location for documents
 * <li>downloads - the location for downloaded items
 * <li>ringtones - the location for ringtones (read-only location)
 * <li>camera - the location for the pictures and videos taken by a device (supported since Tizen 2.3)
 * <li>wgt-package - the location for widget package which is read-only
 * <li>wgt-private - the location for a widget's private storage
 * <li>wgt-private-tmp - the location for a widget's private volatile storage
 * </ul>
 * <p>
The file URI path is also supported. To access other paths out of virtual root, for example '/tmp/', 'file:///tmp' can be used as location parameter.
        </p>
 * <p>
To access specific locations apart from those specified above, a file handle must be retrieved using the <em>filesystem.resolve() </em>call.
        </p>
 * <p>
A file handle represents either a file or a directory:        </p>
 * <ul>
 * <li>For a file, the attribute is set to .
 * <li>For a directory, the attribute is set to .
 * </ul>
 * <p>
A file can be opened for both read and write operations, using a
FileStream handle. A list of files and sub-directories can be obtained from a
directory and a resolve method exists to resolve files or sub-directories
more conveniently than processing directory listings.
        </p>
 * <p>
The implementation must support the use of the following characters in file names:
        </p>
 * <ul>
 * <li>Letters (a-z, A-Z)
 * <li>Numbers (0-9)
 * <li>Blank space
 * <li>Underscore ("_")
 * <li>Hyphen ("-")
 * <li>Period (".")
 * </ul>
 * <p>
The implementation may support additional characters in file names, depending on platform support.
        </p>
 * <p>
The implementation may forbid the use of additional characters in file names, depending on the platform. The use of the path (component) separator "/" should not be allowed in file names.
        </p>
 * <p>
Some other file name and path characteristics are platform-dependent,
for example, maximum path length, file name length, case sensitivity, additional
character support, etc. Therefore, it is recommended to avoid any dependency
on aspects that cannot be supported across multiple platforms.
        </p>
 * <p>
When a path is used to interact with the underlying filesystem, the encoding used for the file path should be the platform default.
        </p>
 * <p>
For more information on the Filesystem features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/filesystem.htm">File System Guide</a>.
        </p>
 *
 * @type FileSystemManager
 */
FileSystemManagerObject.prototype.filesystem = new FileSystemManager();

/**
 * Called when the File.openStream asynchronous call completes successfully.
 *
 * @param {FileStream} filestream
 * @type void
 * @memberOf FileStreamSuccessCallback
 * @returns {void}
 */
FileStreamSuccessCallback.prototype.onsuccess = function(filestream){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} storages
 * @type void
 * @memberOf FileSystemStorageArraySuccessCallback
 * @returns {void}
 */
FileSystemStorageArraySuccessCallback.prototype.onsuccess = function(storages){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} files
 * @type void
 * @memberOf FileArraySuccessCallback
 * @returns {void}
 */
FileArraySuccessCallback.prototype.onsuccess = function(files){ return; };

/**
 * The Filesystem API provides access to a device's filesystem.
 * <p>
The filesystem is represented as an abstract collection of disjointed filesystem virtual
root locations, each corresponding to a specific location in the device
filesystem. The filesystem API exposes the hierarchies below these root
locations as a single virtual filesystem, but provides no access to other
parts of the device filesystem.
        </p>
 * <p>
Each virtual root has a string name. Each file or directory within the virtual
filesystem is addressed using a fully-qualified path of the form:
<em>&lt;root name&gt;/&lt;path&gt;</em> where <em>&lt;rootname&gt;</em> is
the name of the virtual root and <em>&lt;path&gt;</em> is the path to the file or
directory relative to that root.
        </p>
 * <p>
The following virtual roots must be supported:
        </p>
 * <ul>
 * <li>images - the location for images
 * <li>videos - the location for videos
 * <li>music - the location for sounds
 * <li>documents - the location for documents
 * <li>downloads - the location for downloaded items
 * <li>ringtones - the location for ringtones (read-only location)
 * <li>camera - the location for the pictures and videos taken by a device (supported since Tizen 2.3)
 * <li>wgt-package - the location for widget package which is read-only
 * <li>wgt-private - the location for a widget's private storage
 * <li>wgt-private-tmp - the location for a widget's private volatile storage
 * </ul>
 * <p>
The file URI path is also supported. To access other paths out of virtual root, for example '/tmp/', 'file:///tmp' can be used as location parameter.
        </p>
 * <p>
To access specific locations apart from those specified above, a file handle must be retrieved using the <em>filesystem.resolve() </em>call.
        </p>
 * <p>
A file handle represents either a file or a directory:        </p>
 * <ul>
 * <li>For a file, the attribute is set to .
 * <li>For a directory, the attribute is set to .
 * </ul>
 * <p>
A file can be opened for both read and write operations, using a
FileStream handle. A list of files and sub-directories can be obtained from a
directory and a resolve method exists to resolve files or sub-directories
more conveniently than processing directory listings.
        </p>
 * <p>
The implementation must support the use of the following characters in file names:
        </p>
 * <ul>
 * <li>Letters (a-z, A-Z)
 * <li>Numbers (0-9)
 * <li>Blank space
 * <li>Underscore ("_")
 * <li>Hyphen ("-")
 * <li>Period (".")
 * </ul>
 * <p>
The implementation may support additional characters in file names, depending on platform support.
        </p>
 * <p>
The implementation may forbid the use of additional characters in file names, depending on the platform. The use of the path (component) separator "/" should not be allowed in file names.
        </p>
 * <p>
Some other file name and path characteristics are platform-dependent,
for example, maximum path length, file name length, case sensitivity, additional
character support, etc. Therefore, it is recommended to avoid any dependency
on aspects that cannot be supported across multiple platforms.
        </p>
 * <p>
When a path is used to interact with the underlying filesystem, the encoding used for the file path should be the platform default.
        </p>
 * <p>
For more information on the Filesystem features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/filesystem.htm">File System Guide</a>.
        </p>
 *
 * @type FileSystemManager
 */
Tizen.prototype.filesystem = new FileSystemManager();

/**
 * The HumanActivityAccumulativePedometerData interface represents pedometer motion data since the device is booted.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityAccumulativePedometerData}
 */
function HumanActivityAccumulativePedometerData() {};
HumanActivityAccumulativePedometerData.prototype = new HumanActivityData();

/**
 * The HumanActivityMonitorSuccessCallback interface is a callback interface that is invoked when new human activity data is available.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityMonitorSuccessCallback}
 */
function HumanActivityMonitorSuccessCallback() {};
HumanActivityMonitorSuccessCallback.prototype = new Object();

/**
 * The HumanActivityGPSInfoArray interface represents GPS information array.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityGPSInfoArray}
 */
function HumanActivityGPSInfoArray() {};
HumanActivityGPSInfoArray.prototype = new HumanActivityData();

/**
 * The StepDifference interface represents the count difference between steps and timestamp.
 *
 * @super Object
 * @constructor
 * @return {StepDifference}
 */
function StepDifference() {};
StepDifference.prototype = new Object();

/**
 * The HumanActivityHRMData interface represents Heart Rate Monitor(HRM) data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityHRMData}
 */
function HumanActivityHRMData() {};
HumanActivityHRMData.prototype = new HumanActivityData();

/**
 * The HumanActivityData interface is a common abstract interface used by the different types of human activity data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityData}
 */
function HumanActivityData() {};
HumanActivityData.prototype = new Object();

/**
 * The HumanActivityMonitorManagerObject interface defines what is instantiated by the object. The object allows access to the human activity data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityMonitorManagerObject}
 */
function HumanActivityMonitorManagerObject() {};
HumanActivityMonitorManagerObject.prototype = new Object();

/**
 * The HumanActivityPedometerData interface represents pedometer data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityPedometerData}
 */
function HumanActivityPedometerData() {};
HumanActivityPedometerData.prototype = new HumanActivityData();

/**
 * The HumanActivityGPSInfo interface represents GPS information.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityGPSInfo}
 */
function HumanActivityGPSInfo() {};
HumanActivityGPSInfo.prototype = new Object();

/**
 * The HumanActivityMonitorManager interface provides methods to access human activity data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityMonitorManager}
 */
function HumanActivityMonitorManager() {};
HumanActivityMonitorManager.prototype = new Object();

/**
 * Current movement type.
 *
 * @type PedometerStepStatus
 */
HumanActivityAccumulativePedometerData.prototype.stepStatus = new PedometerStepStatus();

/**
 * Current speed in km/h.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.speed = new Number();

/**
 * Step count per second.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.walkingFrequency = new Number();

/**
 * Accumulative distance traveled since the device is booted in meters.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeDistance = new Number();

/**
 * Accumulative calories burnt since the device is booted in kcal.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeCalorie = new Number();

/**
 * Accumulative walking and running step count since the device is booted.
 * <p>
The value is the sum of <em>accumulativeWalkStepCount</em> and <em>accumulativeRunStepCount</em>.
            </p>
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeTotalStepCount = new Number();

/**
 * Accumulative walking step count since the device is booted.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeWalkStepCount = new Number();

/**
 * Accumulative running step count since the device is booted.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeRunStepCount = new Number();

/**
 * Array of the StepDifference.
 *
 * @type array
 */
HumanActivityAccumulativePedometerData.prototype.stepCountDifferences = new array();

/**
 * Called when there is new human activity data available.
 *
 * @param {HumanActivityData} humanactivitydata
 * @type void
 * @memberOf HumanActivityMonitorSuccessCallback
 * @returns {void}
 */
HumanActivityMonitorSuccessCallback.prototype.onsuccess = function(humanactivitydata){ return; };

/**
 * An attribute to indicate the array of GPS information.
 *
 * @type array
 */
HumanActivityGPSInfoArray.prototype.gpsInfo = new array();

/**
 * Count difference between the steps.
 *
 * @type Number
 */
StepDifference.prototype.stepCountDifference = new Number();

/**
 * Timestamp in seconds.
 *
 * @type Number
 */
StepDifference.prototype.timestamp = new Number();

/**
 * Heart rate in beats per minute. When a user takes off the watch device, the heartRate is set to -3. When a user shakes the watch, the heartRate is set to -2.
 *
 * @type Number
 */
HumanActivityHRMData.prototype.heartRate = new Number();

/**
 * Peak-to-peak interval in millisecond(s).
 *
 * @type Number
 */
HumanActivityHRMData.prototype.rRInterval = new Number();

/**
 * The HumanActivityMonitor API defines interfaces and methods to manage human activity data from various sensors on the device.
 * <p>
The following human activity monitor functionality is provided:
        </p>
 * <ul>
 * <li>Set up callbacks for data change notification
 * <li>Get current human activity monitor data
 * </ul>
 * <p>
For more information about how to use Human Activity Monitor API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/ham.htm">HumanActivityMonitor Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/humanactivitymonitor
 * @type HumanActivityMonitorManager
 */
HumanActivityMonitorManagerObject.prototype.humanactivitymonitor = new HumanActivityMonitorManager();

/**
 * The current movement type.
 *
 * @type PedometerStepStatus
 */
HumanActivityPedometerData.prototype.stepStatus = new PedometerStepStatus();

/**
 * Current speed in km/h.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.speed = new Number();

/**
 * Step count per second.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.walkingFrequency = new Number();

/**
 * Cumulative distance traveled since the last start() method call in meters.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeDistance = new Number();

/**
 * Cumulative calories burned since the last start() method call in kcal.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeCalorie = new Number();

/**
 * Cumulative walking and running step count since the last start() method call.
 * <p>
The value is the sum of <em>cumulativeWalkStepCount</em> and <em>cumulativeRunStepCount</em>.
            </p>
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeTotalStepCount = new Number();

/**
 * Cumulative walking step count since the last start() method call.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeWalkStepCount = new Number();

/**
 * Cumulative running step count since the last start() method call.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeRunStepCount = new Number();

/**
 * Array of the StepDifference.
 *
 * @type array
 */
HumanActivityPedometerData.prototype.stepCountDifferences = new array();

/**
 * An attribute to indicate the user's latitude in degrees.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.latitude = new Number();

/**
 * An attribute to indicate the user's longitude in degrees.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.longitude = new Number();

/**
 * An attribute to indicate the user's altitude in meters.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.altitude = new Number();

/**
 * An attribute to indicate the speed in km/h.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.speed = new Number();

/**
 * An attribute to indicate the error range of the user's position in meters.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.errorRange = new Number();

/**
 * An attribute to indicate timestamp in seconds.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.timestamp = new Number();

/**
 * Gets the current human activity data for the requested type.
            <p>
If the given type is not supported on a device, <var>NotSupportedError</var> is thrown.
            </p>
            <p>
The <em>start()</em> method should be called to turn on the sensor before calling the <em>getHumanActivityData()</em> method. If not, <var>ServiceNotAvailableError</var> occurs.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getHumanActivityData()</em> method is called without previously calling the <em>start()</em> method              </li>
            </ul>
           
 *
 * @param {HumanActivityType} type
 * @param {HumanActivityMonitorSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.getHumanActivityData = function(type, successCallback, errorCallback){ return; };

/**
 * Starts the sensor and registers a change listener to be called when new human activity data for a given human activity type is available.
 *
 * @param {HumanActivityType} type
 * @param {HumanActivityMonitorSuccessCallback} changedCallback
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.start = function(type, changedCallback){ return; };

/**
 * Stops the sensor and unregisters a previously registered listener for available human activity data.
 *
 * @param {HumanActivityType} type
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.stop = function(type){ return; };

/**
 * Starts the sensor and registers a listener to be called when new accumulative pedometer data is available.
            <p>
Note that the setAccumulativePedometerListener() method does not need to call the sensor's start() method.
            </p>
           
 *
 * @param {HumanActivityMonitorSuccessCallback} changeCallback
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.setAccumulativePedometerListener = function(changeCallback){ return; };

/**
 * Stops the sensor and unregisters a previously registered listener for the accumulative pedometer data.
 *
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.unsetAccumulativePedometerListener = function(){ return; };

/**
 * The HumanActivityMonitor API defines interfaces and methods to manage human activity data from various sensors on the device.
 * <p>
The following human activity monitor functionality is provided:
        </p>
 * <ul>
 * <li>Set up callbacks for data change notification
 * <li>Get current human activity monitor data
 * </ul>
 * <p>
For more information about how to use Human Activity Monitor API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/ham.htm">HumanActivityMonitor Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/humanactivitymonitor
 * @type HumanActivityMonitorManager
 */
Tizen.prototype.humanactivitymonitor = new HumanActivityMonitorManager();

/**
 * The MediaKeyManagerObject interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.mediakey object that allows accessing the functionality of the MediaKey API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MediaKeyManagerObject}
 */
function MediaKeyManagerObject() {};
MediaKeyManagerObject.prototype = new Object();

/**
 * The MediaKeyManager interface provides the functionalities to get information about media key events.
 *
 * @super Object
 * @constructor
 * @return {MediaKeyManager}
 */
function MediaKeyManager() {};
MediaKeyManager.prototype = new Object();

/**
 * The MediaKeyEventCallback interface specifies a media key event callback for getting notified information about the media key events.
 *
 * @super Object
 * @constructor
 * @return {MediaKeyEventCallback}
 */
function MediaKeyEventCallback() {};
MediaKeyEventCallback.prototype = new Object();

/**
 * The MediaKey API provides functions to get notified when a media key has been pressed or released.
 * <p>
Media keys are the keys of a Bluetooth headset which control multimedia playback.
        </p>
 * <p>
For more information on the MediaKey features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/media_guide/mediakey.htm">MediaKey Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.bluetooth.audio.media
 * @type MediaKeyManager
 */
MediaKeyManagerObject.prototype.mediakey = new MediaKeyManager();

/**
 * Registers a listener to be called when a media key is pressed or released.
 *
 * @param {MediaKeyEventCallback} callback
 * @type void
 * @memberOf MediaKeyManager
 * @returns {void}
 */
MediaKeyManager.prototype.setMediaKeyEventListener = function(callback){ return; };

/**
 * Unsubscribes from receiving notification for detecting the media key event.
 *
 * @type void
 * @memberOf MediaKeyManager
 * @returns {void}
 */
MediaKeyManager.prototype.unsetMediaKeyEventListener = function(){ return; };

/**
 * Called when a media key has been pressed.
 *
 * @param {MediaKeyType} type
 * @type void
 * @memberOf MediaKeyEventCallback
 * @returns {void}
 */
MediaKeyEventCallback.prototype.onpressed = function(type){ return; };

/**
 * Called when a media key has been released.
 *
 * @param {MediaKeyType} type
 * @type void
 * @memberOf MediaKeyEventCallback
 * @returns {void}
 */
MediaKeyEventCallback.prototype.onreleased = function(type){ return; };

/**
 * The MediaKey API provides functions to get notified when a media key has been pressed or released.
 * <p>
Media keys are the keys of a Bluetooth headset which control multimedia playback.
        </p>
 * <p>
For more information on the MediaKey features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/media_guide/mediakey.htm">MediaKey Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.bluetooth.audio.media
 * @type MediaKeyManager
 */
Tizen.prototype.mediakey = new MediaKeyManager();

/**
 * The interface defines what is instantiated by the Tizen object from the Tizen Platform.
          <p>
The <em>tizen.messageport</em> object allows access to the functionality of the Message Port API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessagePortManagerObject}
 */
function MessagePortManagerObject() {};
MessagePortManagerObject.prototype = new Object();

/**
 * The MessagePortCallback interface defines notification callbacks for receiving data from other applications.
 *
 * @super Object
 * @constructor
 * @return {MessagePortCallback}
 */
function MessagePortCallback() {};
MessagePortCallback.prototype = new Object();

/**
 * The interface provides methods to send messages.
 *
 * @super Object
 * @constructor
 * @return {RemoteMessagePort}
 */
function RemoteMessagePort() {};
RemoteMessagePort.prototype = new Object();

/**
 * The interface provides methods to receive data.
 *
 * @super Object
 * @constructor
 * @return {LocalMessagePort}
 */
function LocalMessagePort() {};
LocalMessagePort.prototype = new Object();

/**
 * The interface provides methods to request message port to communicate.
 *
 * @super Object
 * @constructor
 * @return {MessagePortManager}
 */
function MessagePortManager() {};
MessagePortManager.prototype = new Object();

/**
 * The MessagePort API provides the functionality for communicating with other applications.
 * <p>
For more information on the MessagePort features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/messageport.htm">MessagePort Guide</a>.
        </p>
 *
 * @type MessagePortManager
 */
MessagePortManagerObject.prototype.messageport = new MessagePortManager();

/**
 * Called when data is received from other applications via the specified message port name.
 *
 * @param {array} data
 * @param {RemoteMessagePort} remoteMessagePort
 * @type void
 * @memberOf MessagePortCallback
 * @returns {void}
 */
MessagePortCallback.prototype.onreceived = function(data, remoteMessagePort){ return; };

/**
 * The message port name.
 *
 * @type String
 */
RemoteMessagePort.prototype.messagePortName = new String();

/**
 * The application ID to connect with.
 *
 * @type ApplicationId
 */
RemoteMessagePort.prototype.appId = new ApplicationId();

/**
 * The flag indicating whether the message port is trusted.
 *
 * @type Boolean
 */
RemoteMessagePort.prototype.isTrusted = new Boolean();

/**
 * Sends messages to the specified application.
            <p>
The sent messages will be ignored without any notice, unless the target application added one or more listeners to the target local message port.
            </p>
           
 *
 * @param {array} data
 * @param {LocalMessagePort} localMessagePort
 * @type void
 * @memberOf RemoteMessagePort
 * @returns {void}
 */
RemoteMessagePort.prototype.sendMessage = function(data, localMessagePort){ return; };

/**
 * The name of the message port name.
 *
 * @type String
 */
LocalMessagePort.prototype.messagePortName = new String();

/**
 * The flag indicating whether the message port is trusted.
 *
 * @type Boolean
 */
LocalMessagePort.prototype.isTrusted = new Boolean();

/**
 * Adds a message port listener to receive messages from other applications.
 *
 * @param {MessagePortCallback} listener
 * @type Number
 * @memberOf LocalMessagePort
 * @returns {Number}
 */
LocalMessagePort.prototype.addMessagePortListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the message port listener.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf LocalMessagePort
 * @returns {void}
 */
LocalMessagePort.prototype.removeMessagePortListener = function(watchId){ return; };

/**
 * Requests a LocalMessage Port instance to start receiving message from another application.
 *
 * @param {String} localMessagePortName
 * @type LocalMessagePort
 * @memberOf MessagePortManager
 * @returns {LocalMessagePort}
 */
MessagePortManager.prototype.requestLocalMessagePort = function(localMessagePortName){ var ret = new LocalMessagePort(); return ret; };

/**
 * Requests a trusted LocalMessagePort instance to receive message from another application.
            <p>
Trusted local message port can communicate with applications that are signed with same certificate.
            </p>
           
 *
 * @param {String} localMessagePortName
 * @type LocalMessagePort
 * @memberOf MessagePortManager
 * @returns {LocalMessagePort}
 */
MessagePortManager.prototype.requestTrustedLocalMessagePort = function(localMessagePortName){ var ret = new LocalMessagePort(); return ret; };

/**
 * Requests a RemoteMessagePort instance to send message to another application.
            <p>
If the message port name and application ID are the same, the platform returns the same RemoteMessagePort instance.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {String} remoteMessagePortName
 * @type RemoteMessagePort
 * @memberOf MessagePortManager
 * @returns {RemoteMessagePort}
 */
MessagePortManager.prototype.requestRemoteMessagePort = function(appId, remoteMessagePortName){ var ret = new RemoteMessagePort(); return ret; };

/**
 * Requests a trusted RemoteMessagePort instance to receive message from another application.
            <p>
If the message port name and application ID are the same, the platform returns the same RemoteMessagePort instance.
Trusted remote message port can communicate with applications that are signed with same certificate.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {String} remoteMessagePortName
 * @type RemoteMessagePort
 * @memberOf MessagePortManager
 * @returns {RemoteMessagePort}
 */
MessagePortManager.prototype.requestTrustedRemoteMessagePort = function(appId, remoteMessagePortName){ var ret = new RemoteMessagePort(); return ret; };

/**
 * The MessagePort API provides the functionality for communicating with other applications.
 * <p>
For more information on the MessagePort features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/messageport.htm">MessagePort Guide</a>.
        </p>
 *
 * @type MessagePortManager
 */
Tizen.prototype.messageport = new MessagePortManager();

/**
 * The NDEFRecord interface.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecord}
 */
function NDEFRecord() {};
NDEFRecord.prototype = new Object();

/**
 * The NFCTagDetectCallback interface specifies a success callback to be invoked when an NFC tag is detected or lost.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 onattach: Invoked when an NFC tag is detected            </li>
            <li>
 ondetach: Invoked when an NFC tag is lost            </li>
          </ul>
          <p>
It is used in NFCAdapter.setTagListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCTagDetectCallback}
 */
function NFCTagDetectCallback() {};
NFCTagDetectCallback.prototype = new Object();

/**
 * The NDEFMessage interface. An NDEFmessage is composed of multiple NDEFRecords. The NDEFMessage must have at least one NDEFRecord.
 *
 * @super Object
 * @constructor
 * @return {NDEFMessage}
 */
function NDEFMessage() {};
NDEFMessage.prototype = new Object();

/**
 * The ActiveSecureElementChangeCallback interface specifies a success callback to be invoked when an active secure element is changed.
 *
 * @super Object
 * @constructor
 * @return {ActiveSecureElementChangeCallback}
 */
function ActiveSecureElementChangeCallback() {};
ActiveSecureElementChangeCallback.prototype = new Object();

/**
 * The NDEFRecord that has text type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordText}
 */
function NDEFRecordText() {};
NDEFRecordText.prototype = new NDEFRecord();

/**
 * The AIDArraySuccessCallback interface specifies a success callback to be invoked when an NFCAdaptor.getAIDsForCategory() completes successfully.
 *
 * @super Object
 * @constructor
 * @return {AIDArraySuccessCallback}
 */
function AIDArraySuccessCallback() {};
AIDArraySuccessCallback.prototype = new Object();

/**
 * The NFCPeer interface provides access to the NFC peer-to-peer target.
 *
 * @super Object
 * @constructor
 * @return {NFCPeer}
 */
function NFCPeer() {};
NFCPeer.prototype = new Object();

/**
 * The NDEFMessageReadCallback interface specifies a success callback to be invoked when data has been read successfully from the NFC tag or target.
          <p>
This callback interface specifies a success method with
an NDEF message as an input parameter.
It is used in asynchronous
operations, such as NFCTag.readNDEF() or NFCPeer.setReceiveNDEFListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NDEFMessageReadCallback}
 */
function NDEFMessageReadCallback() {};
NDEFMessageReadCallback.prototype = new Object();

/**
 * The NFCManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the functionality of the NFC API.
 *
 * @super Object
 * @constructor
 * @return {NFCManagerObject}
 */
function NFCManagerObject() {};
NFCManagerObject.prototype = new Object();

/**
 * The HCEEventReceiveCallback interface specifies a success callback to be invoked when an HCE event is detected.
 *
 * @super Object
 * @constructor
 * @return {HCEEventReceiveCallback}
 */
function HCEEventReceiveCallback() {};
HCEEventReceiveCallback.prototype = new Object();

/**
 * The NFCManager interface provides access to the NFC tag/target.
          <p>
It provides access to the API functionalities through the tizen.nfc interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCManager}
 */
function NFCManager() {};
NFCManager.prototype = new Object();

/**
 * The NDEFRecord that has URI type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordURI}
 */
function NDEFRecordURI() {};
NDEFRecordURI.prototype = new NDEFRecord();

/**
 * The ByteArraySuccessCallback interface specifies a success callback to be invoked when NFCTag.transceive() completes successfully.
          <p>
This callback interface specifies a success method, with
raw data as an input parameter. It is used in NFCTag.transceive().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ByteArraySuccessCallback}
 */
function ByteArraySuccessCallback() {};
ByteArraySuccessCallback.prototype = new Object();

/**
 * The NFCAdapter interface provides access to control the adapter by offering methods to control local NFC behaviors, such as turning on/off an adapter.
 *
 * @super Object
 * @constructor
 * @return {NFCAdapter}
 */
function NFCAdapter() {};
NFCAdapter.prototype = new Object();

/**
 * The AID data interface represents registerd AID data
 *
 * @super Object
 * @constructor
 * @return {AIDData}
 */
function AIDData() {};
AIDData.prototype = new Object();

/**
 * The CardEmulationModeChangeCallback interface specifies a success callback to be invoked when the card emulation mode is changed.
 *
 * @super Object
 * @constructor
 * @return {CardEmulationModeChangeCallback}
 */
function CardEmulationModeChangeCallback() {};
CardEmulationModeChangeCallback.prototype = new Object();

/**
 * The NFCTag interface provides access to the NFC tag.
 *
 * @super Object
 * @constructor
 * @return {NFCTag}
 */
function NFCTag() {};
NFCTag.prototype = new Object();

/**
 * The HCEEventData interface represents HCE event data.
 *
 * @super Object
 * @constructor
 * @return {HCEEventData}
 */
function HCEEventData() {};
HCEEventData.prototype = new Object();

/**
 * The NDEFRecord that has mime type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordMedia}
 */
function NDEFRecordMedia() {};
NDEFRecordMedia.prototype = new NDEFRecord();

/**
 * The NFCPeerDetectCallback interface specifies a success callback to be invoked when an NFC peer-to-peer target is detected or lost.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 onattach: Invoked when an NFC peer-to-peer target is detected            </li>
            <li>
 ondetach: Invoked when an NFC peer-to-peer target is lost            </li>
          </ul>
          <p>
It is used in NFCAdapter.setPeerListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCPeerDetectCallback}
 */
function NFCPeerDetectCallback() {};
NFCPeerDetectCallback.prototype = new Object();

/**
 * The TransactionEventCallback interface specifies a success callback to be invoked when an external reader tries to access a secure element.
 *
 * @super Object
 * @constructor
 * @return {TransactionEventCallback}
 */
function TransactionEventCallback() {};
TransactionEventCallback.prototype = new Object();

/**
 * The value of the record type (TNF value).
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>NFC_RECORD_TNF_EMPTY - The record type is empty
 * <li>NFC_RECORD_TNF_WELL_KNOWN - Record Type Definition (RTD) format [NFC RTD]
 * <li>NFC_RECORD_TNF_MIME_MEDIA - MIME media types in RFC 2046 [RFC 2046]
 * <li>NFC_RECORD_TNF_URI - Absolute URI as defined in RFC 3986 [RFC 3986]
 * <li>NFC_RECORD_TNF_EXTERNAL_RTD - NFC forum external type [NFC RTD]
 * <li>NFC_RECORD_TNF_UNKNOWN - The payload type is unknown
 * <li>NFC_RECORD_TNF_UNCHANGED - It means the payload is an intermediate or final chunk of a chunked NDEF record
 * </ul>
 *
 * @type Number
 */
NDEFRecord.prototype.tnf = new Number();

/**
 * The specified type in byte array.
 * <p>
The byte array contains <var>0</var> to <var>255</var> bytes.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.type = new array();

/**
 * The record ID.
 * <p>
The byte array contains <var>0</var> to <var>255</var> bytes.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.id = new array();

/**
 * The record payload.
 * <p>
The byte array contains <var>0</var> to <var>(2 ** 32 - 1)</var> bytes.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.payload = new array();

/**
 * The method invoked when a tag is attached.
 *
 * @param {NFCTag} nfcTag
 * @type void
 * @memberOf NFCTagDetectCallback
 * @returns {void}
 */
NFCTagDetectCallback.prototype.onattach = function(nfcTag){ return; };

/**
 * The method invoked when the connected tag is detached.
 *
 * @type void
 * @memberOf NFCTagDetectCallback
 * @returns {void}
 */
NFCTagDetectCallback.prototype.ondetach = function(){ return; };

/**
 * The number of records in the NDEFMessage.
 *
 * @type Number
 */
NDEFMessage.prototype.recordCount = new Number();

/**
 * The array of NDEFRecord objects in the NDEFMessage.
 *
 * @type array
 */
NDEFMessage.prototype.records = new array();

/**
 * Gets the serial byte array of the NDEF message.
            <p>
If the operation completes successfully, it returns the serial byte array of the NDEF message.
            </p>
           
 *
 * @type array
 * @memberOf NDEFMessage
 * @returns {array}
 */
NDEFMessage.prototype.toByte = function(){ var ret = new array(); return ret; };

/**
 * Called when the type of an active secure element is changed.
 *
 * @param {SecureElementType} type
 * @type void
 * @memberOf ActiveSecureElementChangeCallback
 * @returns {void}
 */
ActiveSecureElementChangeCallback.prototype.onchanged = function(type){ return; };

/**
 * The encoded text.
 *
 * @type String
 */
NDEFRecordText.prototype.text = new String();

/**
 * The language code string value, followed by IANA[RFC 3066] (for example, en-US, ko-KR).
 *
 * @type String
 */
NDEFRecordText.prototype.languageCode = new String();

/**
 * The encoding type. By default, this attribute is set to UTF8.
 *
 * @type NDEFRecordTextEncoding
 */
NDEFRecordText.prototype.encoding = new NDEFRecordTextEncoding();

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {array} aids
 * @type void
 * @memberOf AIDArraySuccessCallback
 * @returns {void}
 */
AIDArraySuccessCallback.prototype.onsuccess = function(aids){ return; };

/**
 * The value is necessary to check if this NFC peer-to-peer target is connected.
 *
 * @type Boolean
 */
NFCPeer.prototype.isConnected = new Boolean();

/**
 * Registers a callback function to be invoked when an NDEF message is received from the connected NFC peer-to-peer target.
 *
 * @param {NDEFMessageReadCallback} successCallback
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.setReceiveNDEFListener = function(successCallback){ return; };

/**
 * Unregisters the listener for receiving NDEF messages from the NFC peer-to-peer target connected.
 *
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.unsetReceiveNDEFListener = function(){ return; };

/**
 * Sends data to the NFC peer-to-peer target.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError: If the NFC service is not available.               </li>
              <li>
 UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {NDEFMessage} ndefMessage
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.sendNDEF = function(ndefMessage, successCallback, errorCallback){ return; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {NDEFMessage} ndefMessage
 * @type void
 * @memberOf NDEFMessageReadCallback
 * @returns {void}
 */
NDEFMessageReadCallback.prototype.onsuccess = function(ndefMessage){ return; };

/**
 * The NFC API provides a protocol for simple wireless interconnection of closely coupled devices operating at 13.56 MHz using Near Field Communication (NFC), which is an international standard (ISO/IEC 18092). To know more, see .
 * <p>
There are three groups of application scenarios for NFC:
        </p>
 * <ul>
 * <li>Exchanging some digital information or data by holding a device close to a wireless tag.
 * <li>Exchanging some information or data between two devices by holding them close to each other.
 * <li>Making payments by holding mobile phones close to point of sales terminals instead of swiping smart cards.
 * </ul>
 * <p>
For more information on the NFC features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/communication_guide/nfc.htm">NFC Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.nfc
 * @type NFCManager
 */
NFCManagerObject.prototype.nfc = new NFCManager();

/**
 * Called when HCE event is detected.
 *
 * @param {HCEEventData} data
 * @type void
 * @memberOf HCEEventReceiveCallback
 * @returns {void}
 */
HCEEventReceiveCallback.prototype.ondetected = function(data){ return; };

/**
 * A constant to indicate the empty format of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_EMPTY = new Number();

/**
 * A constant to indicate the Record Type Definition (RTD) format of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_WELL_KNOWN = new Number();

/**
 * A constant to indicate the MIME media types format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_MIME_MEDIA = new Number();

/**
 * A constant to indicate the absolute URI, as defined in the RFC 3986 [RFC 3986] format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_URI = new Number();

/**
 * A constant to indicate the NFC forum external type [NFC RTD] format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_EXTERNAL_RTD = new Number();

/**
 * A constant to indicate the unknown type format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_UNKNOWN = new Number();

/**
 * A constant to indicate whether the payload is an intermediate or final chunk of a chunked NDEF record.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_UNCHANGED = new Number();

/**
 * Gets the default NFC adapter of the device.
 *
 * @type NFCAdapter
 * @memberOf NFCManager
 * @returns {NFCAdapter}
 */
NFCManager.prototype.getDefaultAdapter = function(){ var ret = new NFCAdapter(); return ret; };

/**
 * Gives priority to the current application for NFC operations.
            <p>
If the current application has priority, and is in the foreground, the system will not generate
application control requests to pick an application to handle NFC requests.
Such a request is usually generated, for example, when detecting an NFC tag or receiving an NDEF message
from a connected NFC peer-to-peer target.
            </p>
            <p>
When the current application moves to the background, it loses the priority.
            </p>
            <p>
The exclusive mode can only be set when NFC is on. If NFC is off, the mode is ignored.
            </p>
           
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf NFCManager
 * @returns {void}
 */
NFCManager.prototype.setExclusiveMode = function(mode){ return; };

/**
 * The URI string that is stored in the payload.
 *
 * @type String
 */
NDEFRecordURI.prototype.uri = new String();

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {array} data
 * @type void
 * @memberOf ByteArraySuccessCallback
 * @returns {void}
 */
ByteArraySuccessCallback.prototype.onsuccess = function(data){ return; };

/**
 * The state of the NFC adapter.
 *
 * @type Boolean
 */
NFCAdapter.prototype.powered = new Boolean();

/**
 * Card emulation mode of the NFC adapter.
 * <p>
To be allowed to change <var>cardEmulationMode</var>, the following privilege must be declared in the application's <em>config.xml</em> file.
            </p>
 * <ul>
 * <li>- NFC card emulation feature is enabled. NFC card emulation related methods are available for use.
 * <li>- NFC card emulation related methods cannot be used
 * </ul>
 *
 * @type CardEmulationMode
 */
NFCAdapter.prototype.cardEmulationMode = new CardEmulationMode();

/**
 * Active secure element type.
 * <p>
To be allowed to change <var>activeSecureElement</var>, the following privilege must be declared in the application's <em>config.xml</em> file.
            </p>
 * <p>
If the NFC service is not available, it returns <var>null</var>.
            </p>
 *
 * @type SecureElementType
 */
NFCAdapter.prototype.activeSecureElement = new SecureElementType();

/**
 * Sets the power of an NFC adapter to either an on state or an off state.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If the NFC device is busy.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {Boolean} state
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setPowered = function(state, successCallback, errorCallback){ return; };

/**
 * Registers a callback function to invoke when an NFC tag is detected.
            <p>
If the registration completes successfully, detectCallback must be
invoked when the NFC tag is detected.
            </p>
            <p>
If no tagFilter is passed, it shall consider the default tagFilter, that is to set all tag types.
            </p>
           
 *
 * @param {NFCTagDetectCallback} detectCallback
 * @param {array} tagFilter
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setTagListener = function(detectCallback, tagFilter){ return; };

/**
 * Registers a callback function to be invoked when an NFC peer-to-peer target is detected.
            <p>
If the registration completes successfully, the detectCallback must be
invoked when an NFC peer-to-peer target is detected.
            </p>
           
 *
 * @param {NFCPeerDetectCallback} detectCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setPeerListener = function(detectCallback){ return; };

/**
 * Unregisters the listener for detecting an NFC tag.
 *
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unsetTagListener = function(){ return; };

/**
 * Unregisters the listener for detecting an NFC peer-to-peer target.
 *
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unsetPeerListener = function(){ return; };

/**
 * Registers a callback function to invoke when the card emulation mode is changed.
 *
 * @param {CardEmulationModeChangeCallback} changeCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addCardEmulationModeChangeListener = function(changeCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of card emulation mode changes.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeCardEmulationModeChangeListener = function(watchId){ return; };

/**
 * Registers a callback function to invoke when an external reader tries to access a secure element. Such an event may indicate initiating a financial transaction using the device.
 *
 * @param {SecureElementType} type
 * @param {TransactionEventCallback} eventCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addTransactionEventListener = function(type, eventCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of transaction events.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeTransactionEventListener = function(watchId){ return; };

/**
 * Registers a callback function to invoke when an active secure element is changed.
 *
 * @param {ActiveSecureElementChangeCallback} changeCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addActiveSecureElementChangeListener = function(changeCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of active secure element changes.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeActiveSecureElementChangeListener = function(watchId){ return; };

/**
 * Gets the NDEF message cached when the tag is detected.
            <p>
If the operation completes successfully, the NDEF Message that is last read
should be returned.
            </p>
           
 *
 * @type NDEFMessage
 * @memberOf NFCAdapter
 * @returns {NDEFMessage}
 */
NFCAdapter.prototype.getCachedMessage = function(){ var ret = new NDEFMessage(); return ret; };

/**
 * Gives priority to the current application for NFC transaction events.
            <p>
If the current application has priority, and is in the foreground, the system will not generate
application control requests to pick an application to handle a transaction event request.
            </p>
            <p>
When the current application moves to the background, it loses priority.
            </p>
            <p>
An application is allowed to get priority only when it is in the foreground.
Losing priority is always allowed regardless of an application's status.
            </p>
           
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setExclusiveModeForTransaction = function(mode){ return; };

/**
 * Registers a callback function for receiving HCE event.
 *
 * @param {HCEEventReceiveCallback} eventCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addHCEEventListener = function(eventCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of a HCE event.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeHCEEventListener = function(watchId){ return; };

/**
 * send host APDU response to CLF (Contactless Front-end).
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} apdu
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.sendHostAPDUResponse = function(apdu, successCallback, errorCallback){ return; };

/**
 * Allows an application to query whether an application is currently the activated handler for a specific AID and secure element type.
 *
 * @param {SecureElementType} type
 * @param {AID} aid
 * @type Boolean
 * @memberOf NFCAdapter
 * @returns {Boolean}
 */
NFCAdapter.prototype.isActivatedHandlerForAID = function(type, aid){ var ret = new Boolean(); return ret; };

/**
 * Allows an application to query whether an application is currently the activated handler for a specific card emulation category and secure element type.
 *
 * @param {SecureElementType} type
 * @param {CardEmulationCategoryType} category
 * @type Boolean
 * @memberOf NFCAdapter
 * @returns {Boolean}
 */
NFCAdapter.prototype.isActivatedHandlerForCategory = function(type, category){ var ret = new Boolean(); return ret; };

/**
 * Registers an AID for a specific category and secure element type.
 *
 * @param {SecureElementType} type
 * @param {AID} aid
 * @param {CardEmulationCategoryType} category
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.registerAID = function(type, aid, category){ return; };

/**
 * Unregisters an AID that was previously registered for a specific card emulation category and secure element type. An application can only remove the AIDs which it registered.
 *
 * @param {SecureElementType} type
 * @param {AID} aid
 * @param {CardEmulationCategoryType} category
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unregisterAID = function(type, aid, category){ return; };

/**
 * Retrieves AIDs that were previously registered for a specific card emulation category and secure element type. An application can only retrieve the AIDs which it registered.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SecureElementType} type
 * @param {CardEmulationCategoryType} category
 * @param {AIDArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.getAIDsForCategory = function(type, category, successCallback, errorCallback){ return; };

/**
 * Secure Element type.
 *
 * @type SecureElementType
 */
AIDData.prototype.type = new SecureElementType();

/**
 * The AID (Application ID) data, specified in ISO/IEC 7816-4
 *
 * @type AID
 */
AIDData.prototype.aid = new AID();

/**
 * An attribute to indicate whether the registered AID is read-only or not
 *
 * @type Boolean
 */
AIDData.prototype.readOnly = new Boolean();

/**
 * Called when the card emulation mode is changed.
 *
 * @param {CardEmulationMode} mode
 * @type void
 * @memberOf CardEmulationModeChangeCallback
 * @returns {void}
 */
CardEmulationModeChangeCallback.prototype.onchanged = function(mode){ return; };

/**
 * The type of the NFC tag.
 *
 * @type NFCTagType
 */
NFCTag.prototype.type = new NFCTagType();

/**
 * An attribute to check if the NFC Tag supports the NDEF format.
 *
 * @type Boolean
 */
NFCTag.prototype.isSupportedNDEF = new Boolean();

/**
 * The size of an NDEF message stored in the tag.
 *
 * @type Number
 */
NFCTag.prototype.ndefSize = new Number();

/**
 * The value is all tag information.
 * <p>
It is pairs of key and value.
The array's index is the pair's key and value is its value.
            </p>
 *
 * @type object
 */
NFCTag.prototype.properties = new object();

/**
 * The value is necessary to check if this tag is connected.
 *
 * @type Boolean
 */
NFCTag.prototype.isConnected = new Boolean();

/**
 * Reads the NDEF data from the NFC tag.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
 InvalidValuesError - If the current Tag doesn't support the NDEF standard.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {NDEFMessageReadCallback} readCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.readNDEF = function(readCallback, errorCallback){ return; };

/**
 * Writes the NDEF data to the NFC tag.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError: If any of the input parameters contain an invalid value or the current Tag does not support the NDEF standard.              </li>
              <li>
 ServiceNotAvailableError: If the NFC service is not available.               </li>
              <li>
 UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {NDEFMessage} ndefMessage
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.writeNDEF = function(ndefMessage, successCallback, errorCallback){ return; };

/**
 * Accesses the raw format card. The transceive function is the only way to access the raw format card (not formatted). Each tag type requires its own command to access tags. This API provides low level access of the tag operation. (Note that you must know each tag technology.)
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} data
 * @param {ByteArraySuccessCallback} dataCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.transceive = function(data, dataCallback, errorCallback){ return; };

/**
 * HCE event type.
 *
 * @type HCEEventType
 */
HCEEventData.prototype.eventType = new HCEEventType();

/**
 * The bytes array of APDU
 *
 * @type array
 */
HCEEventData.prototype.apdu = new array();

/**
 * The length of APDU
 *
 * @type Number
 */
HCEEventData.prototype.length = new Number();

/**
 * The mime type [RFC 2046] (for example, text/plain, image/jpeg ).
 *
 * @type String
 */
NDEFRecordMedia.prototype.mimeType = new String();

/**
 * The method invoked when the NFC peer-to-peer target is attached.
 *
 * @param {NFCPeer} nfcPeer
 * @type void
 * @memberOf NFCPeerDetectCallback
 * @returns {void}
 */
NFCPeerDetectCallback.prototype.onattach = function(nfcPeer){ return; };

/**
 * The method invoked when the connected NFC peer-to-peer target is detached.
 *
 * @type void
 * @memberOf NFCPeerDetectCallback
 * @returns {void}
 */
NFCPeerDetectCallback.prototype.ondetach = function(){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} appletId
 * @param {array} data
 * @type void
 * @memberOf TransactionEventCallback
 * @returns {void}
 */
TransactionEventCallback.prototype.ondetected = function(appletId, data){ return; };

/**
 * The NFC API provides a protocol for simple wireless interconnection of closely coupled devices operating at 13.56 MHz using Near Field Communication (NFC), which is an international standard (ISO/IEC 18092). To know more, see .
 * <p>
There are three groups of application scenarios for NFC:
        </p>
 * <ul>
 * <li>Exchanging some digital information or data by holding a device close to a wireless tag.
 * <li>Exchanging some information or data between two devices by holding them close to each other.
 * <li>Making payments by holding mobile phones close to point of sales terminals instead of swiping smart cards.
 * </ul>
 * <p>
For more information on the NFC features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/communication_guide/nfc.htm">NFC Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.nfc
 * @type NFCManager
 */
Tizen.prototype.nfc = new NFCManager();

/**
 * This interface invokes the success callback with an array of objects as an input parameter when the installed package list is retrieved.
          <p>
It is used in <em>tizen.package.getPackagesInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageInformationArraySuccessCallback}
 */
function PackageInformationArraySuccessCallback() {};
PackageInformationArraySuccessCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform.
          <p>
The <em>tizen.package </em>object allows access to Package API functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageManagerObject}
 */
function PackageManagerObject() {};
PackageManagerObject.prototype = new Object();

/**
 * This callback interface specifies methods that are invoked when a package is installed, updated, or uninstalled.
 *
 * @super Object
 * @constructor
 * @return {PackageInformationEventCallback}
 */
function PackageInformationEventCallback() {};
PackageInformationEventCallback.prototype = new Object();

/**
 * This interface defines the general information available to an installed package.
 *
 * @super Object
 * @constructor
 * @return {PackageInformation}
 */
function PackageInformation() {};
PackageInformation.prototype = new Object();

/**
 * This interface defines the package manager.
 *
 * @super Object
 * @constructor
 * @return {PackageManager}
 */
function PackageManager() {};
PackageManager.prototype = new Object();

/**
 * This callback interface specifies subscriptions for any notification on the progress or completion of requests.
 *
 * @super Object
 * @constructor
 * @return {PackageProgressCallback}
 */
function PackageProgressCallback() {};
PackageProgressCallback.prototype = new Object();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf PackageInformationArraySuccessCallback
 * @returns {void}
 */
PackageInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.It also provides a listener method so that an application can be notified when there is a change on the installed packages. For more information on the Package features, see .
 *
 * @type PackageManager
 */
PackageManagerObject.prototype.package = new PackageManager();

/**
 * Called when a package is installed.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.oninstalled = function(info){ return; };

/**
 * Called when a package is updated.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onupdated = function(info){ return; };

/**
 * Called when a package is uninstalled.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onuninstalled = function(id){ return; };

/**
 * An attribute to store the identifier of a package.
 *
 * @type PackageId
 */
PackageInformation.prototype.id = new PackageId();

/**
 * An attribute to store the package name.
 *
 * @type String
 */
PackageInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of a package.
 * <p>
The icon path of the package is the same as the icon path of the relevant application
(see the <a href="application.html#ApplicationInformation::iconPath">iconPath</a> attribute of
the <a href="application.html#ApplicationInformation">ApplicationInformation</a> interface).
            </p>
 * <p>
The relevant application is the one with the same
<a href="application.html#ApplicationInformation::packageId">packageId</a> as the
<a href="#PackageInformation::id">id</a> of this package.
            </p>
 *
 * @type String
 */
PackageInformation.prototype.iconPath = new String();

/**
 * An attribute to store the package version.
 *
 * @type String
 */
PackageInformation.prototype.version = new String();

/**
 * An attribute to store the total installed size(package + data) of a package.
 *
 * @type Number
 */
PackageInformation.prototype.totalSize = new Number();

/**
 * An attribute to store the current data size of a package.
 *
 * @type Number
 */
PackageInformation.prototype.dataSize = new Number();

/**
 * An attribute to store the latest installed or updated time of a package.
 *
 * @type Date
 */
PackageInformation.prototype.lastModified = new Date();

/**
 * An attribute to store the author of a package.
 *
 * @type String
 */
PackageInformation.prototype.author = new String();

/**
 * An attribute to store the package description.
 *
 * @type String
 */
PackageInformation.prototype.description = new String();

/**
 * An attribute to store the application ID list of a package.
 *
 * @type array
 */
PackageInformation.prototype.appIds = new array();

/**
 * Installs a package with a specified file on a device.
            <p>
This API provides a way to notify the progress and completion of an installation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found at the specified location.              </li>
              <li>
UnknownError - If it is not allowed to install the package by the platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {String} packageFileURI
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.install = function(packageFileURI, progressCallback, errorCallback){ return; };

/**
 * Uninstalls the package with a specified package ID.
            <p>
This API provides a way to notify about the progress and completion of an uninstallation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found with the specified ID.              </li>
              <li>
UnknownError - If it is not allowed to uninstall the package from the platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageId} id
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.uninstall = function(id, progressCallback, errorCallback){ return; };

/**
 * Gets information of the installed packages.
            <p>
The result contains the snapshots of the installed packages information.
            </p>
            <p>
The <em>errorCallback()</em> is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.getPackagesInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets information of an installed package.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns the package information of the current application.
The list of installed packages and their package IDs is obtained using <em>getPackagesInfo()</em>.
            </p>
           
 *
 * @param {PackageId} id
 * @type PackageInformation
 * @memberOf PackageManager
 * @returns {PackageInformation}
 */
PackageManager.prototype.getPackageInfo = function(id){ var ret = new PackageInformation(); return ret; };

/**
 * Sets a listener to receive notifications for any changes made to the list of installed packages.
            <p>
This method sets a <em>PackageInformationEventCallback</em> type callback that is triggered when a package is installed, removed, or updated.
            </p>
            <p>
The callback lasts until the <em>unsetPackageInfoEventListener()</em> method is called.
            </p>
           
 *
 * @param {PackageInformationEventCallback} eventCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.setPackageInfoEventListener = function(eventCallback){ return; };

/**
 * Unsets the listener to stop receiving package notifications.
 *
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.unsetPackageInfoEventListener = function(){ return; };

/**
 * Called while the request is in progress.
 *
 * @param {PackageId} id
 * @param {Number} progress
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.onprogress = function(id, progress){ return; };

/**
 * Called when the request is completed.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.oncomplete = function(id){ return; };

/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.It also provides a listener method so that an application can be notified when there is a change on the installed packages. For more information on the Package features, see .
 *
 * @type PackageManager
 */
Tizen.prototype.package = new PackageManager();

/**
 * The ScreenStateChangeCallback callback interface defines notification for the screen state changes.
 *
 * @super Object
 * @constructor
 * @return {ScreenStateChangeCallback}
 */
function ScreenStateChangeCallback() {};
ScreenStateChangeCallback.prototype = new Object();

/**
 * The PowerManager interface is used to request resource states.
          <p>
However, these requests can be overridden by the system. If the requests are overridden, the application is notified with the provided listener callback.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PowerManager}
 */
function PowerManager() {};
PowerManager.prototype = new Object();

/**
 * The PowerManagerObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a <em>tizen.power </em>object that allows accessing of a functionality of the Power API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PowerManagerObject}
 */
function PowerManagerObject() {};
PowerManagerObject.prototype = new Object();

/**
 * Called on screen state change.
 *
 * @param {PowerScreenState} previousState
 * @param {PowerScreenState} changedState
 * @type void
 * @memberOf ScreenStateChangeCallback
 * @returns {void}
 */
ScreenStateChangeCallback.prototype.onchanged = function(previousState, changedState){ return; };

/**
 * Requests the minimum-state for a power resource.
 *
 * @param {PowerResource} resource
 * @param {PowerState} state
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.request = function(resource, state){ return; };

/**
 * Releases the power state request for the given resource.
 *
 * @param {PowerResource} resource
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.release = function(resource){ return; };

/**
 * Sets the screen state change callback and monitors its state changes.
 *
 * @param {ScreenStateChangeCallback} listener
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.setScreenStateChangeListener = function(listener){ return; };

/**
 * Unsets the screen state change callback and stop monitoring it.
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.unsetScreenStateChangeListener = function(){ return; };

/**
 * Gets the screen brightness level of an application, from 0 to 1.
 *
 * @type Number
 * @memberOf PowerManager
 * @returns {Number}
 */
PowerManager.prototype.getScreenBrightness = function(){ var ret = new Number(); return ret; };

/**
 * Sets the screen brightness level, from 0 to 1.
            <p>
An approximation is made for best effort when the given value is not exactly applicable by the hardware or system.
            </p>
           
 *
 * @param {Number} brightness
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.setScreenBrightness = function(brightness){ return; };

/**
 * Checks whether the screen is on.
 *
 * @type Boolean
 * @memberOf PowerManager
 * @returns {Boolean}
 */
PowerManager.prototype.isScreenOn = function(){ var ret = new Boolean(); return ret; };

/**
 * Restores the screen brightness to the system default setting value.
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.restoreScreenBrightness = function(){ return; };

/**
 * Turns on the screen.
            <p>
This API triggers turn-on process and then updates the status when it completes. While the operation is on-going, the isScreenOn() method returns false.
            </p>
           
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.turnScreenOn = function(){ return; };

/**
 * Turns off the screen.
            <p>
This API triggers turn-off process and then updates the status when it completes.
While the operation is on-going, the isScreenOn() method returns true.
            </p>
           
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.turnScreenOff = function(){ return; };

/**
 * The Power API provides support for requesting power management related resource states.
 * <p>
For more information on the Power features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/power.htm">Power Guide</a>.
        </p>
 *
 * @type PowerManager
 */
PowerManagerObject.prototype.power = new PowerManager();

/**
 * The Power API provides support for requesting power management related resource states.
 * <p>
For more information on the Power features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/power.htm">Power Guide</a>.
        </p>
 *
 * @type PowerManager
 */
Tizen.prototype.power = new PowerManager();

/**
 * The PushManagerObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
The <em>tizen.push </em>object allows access to the functionality of the Push API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushManagerObject}
 */
function PushManagerObject() {};
PushManagerObject.prototype = new Object();

/**
 * The PushRegisterSuccessCallback interface specifies the success callback for a push service registration request.
          <p>
This success callback is invoked when a push service registration request is successful.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushRegisterSuccessCallback}
 */
function PushRegisterSuccessCallback() {};
PushRegisterSuccessCallback.prototype = new Object();

/**
 * The PushNotificationCallback interface specifies the notification callback for the received push notification message.
          <p>
This notification callback is invoked when the push notification message arrives.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushNotificationCallback}
 */
function PushNotificationCallback() {};
PushNotificationCallback.prototype = new Object();

/**
 * The PushManager interface provides methods to manage push registration and notification.
 *
 * @super Object
 * @constructor
 * @return {PushManager}
 */
function PushManager() {};
PushManager.prototype = new Object();

/**
 * The PushMessage interface specifies the push message that is delivered from the push service.
 *
 * @super Object
 * @constructor
 * @return {PushMessage}
 */
function PushMessage() {};
PushMessage.prototype = new Object();

/**
 * The Push API provides functionality for receiving push notifications from the Tizen push server. The push service is a client daemon that maintains a permanent connection between your device and the Tizen push server in order to process your registration and deregistration requests and deliver push notifications to applications on a device.
 * <p>
If the application is connected, the push service passes the notification data over
the connection. Otherwise, the push service posts a UI notification with the data.
It will be delivered when a user launches the application by selecting the posting.
        </p>
 * <p>
To receive push notifications, follow the steps below:
        </p>
 * <ul>
 * <li>Get administrative permission for an application on your device
 * <li>Register the application
 * <li>Connect to the push service
 * <li>Get notification data
 * </ul>
 * <p>
To use Push features, the application needs the <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.native.appprogramming/html/tutorials/messaging_tutorial/push_tutorial.htm#start">permission to access the Tizen Push servers</a>.
        </p>
 * <p>
For more information on the Push features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/communication_guide/push.htm">Push Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.push
 * @type PushManager
 */
PushManagerObject.prototype.push = new PushManager();

/**
 * Called when a push service registration request is successful.
 *
 * @param {PushRegistrationId} id
 * @type void
 * @memberOf PushRegisterSuccessCallback
 * @returns {void}
 */
PushRegisterSuccessCallback.prototype.onsuccess = function(id){ return; };

/**
 * Called when the push notification message arrives.
 *
 * @param {PushMessage} message
 * @type void
 * @memberOf PushNotificationCallback
 * @returns {void}
 */
PushNotificationCallback.prototype.onsuccess = function(message){ return; };

/**
 * Registers an application to the Tizen push server.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {PushRegisterSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.registerService = function(appControl, successCallback, errorCallback){ return; };

/**
 * Unregisters an application from the Tizen push server.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.unregisterService = function(successCallback, errorCallback){ return; };

/**
 * Connects to the push service and receives push notifications.
 *
 * @param {PushNotificationCallback} notificationCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.connectService = function(notificationCallback){ return; };

/**
 * Disconnects the push service and stops receiving push notifications.
 *
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.disconnectService = function(){ return; };

/**
 * Gets the push service registration ID for this application if the registration process is successful. is returned if the application has not been registered yet.
 *
 * @type PushRegistrationId
 * @memberOf PushManager
 * @returns {PushRegistrationId}
 */
PushManager.prototype.getRegistrationId = function(){ var ret = new PushRegistrationId(); return ret; };

/**
 * Requests to get unread push notifications. As a consequence, the PushNotificationCallback which was set using the connectService() method will be invoked to retrieve the notifications..
            <p>
The connectService() method must be called to connect to Tizen push server and receive push notifications before calling the getUnreadNotifications() method.
If connectService is not called, <var>ServiceNotAvailableError</var> occurs.<br/>If any unread message exists, you will get unread push notification message through <var>PushNotificationCallback</var> of connectService().
For instance, if there are 10 unread messages, the <var>PushNotificationCallback</var> will be invoked 10 times.<br/><br/>If an application receives unread messages, the messages are removed from the system.
            </p>
            <p>
When an application registers with the push server to receive push notifications,
the push server stores messages for the application until they are delivered.
While the application is not running, messages cannot be delivered.
This method allows retrieving such missed push messages.
Once a missed push notification is retrieved the server deletes it from its database.
            </p>
           
 *
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.getUnreadNotifications = function(){ return; };

/**
 * An attribute to store the push notification data.
 * <p>
This data is the message that the sender wants to send and its length must be less than 1 KB.
            </p>
 *
 * @type String
 */
PushMessage.prototype.appData = new String();

/**
 * An attribute to store the push notification message that is displayed as an alert message to the user.
 *
 * @type String
 */
PushMessage.prototype.alertMessage = new String();

/**
 * An attribute to store the date/time when a push notification message is received.
 *
 * @type Date
 */
PushMessage.prototype.date = new Date();

/**
 * The Push API provides functionality for receiving push notifications from the Tizen push server. The push service is a client daemon that maintains a permanent connection between your device and the Tizen push server in order to process your registration and deregistration requests and deliver push notifications to applications on a device.
 * <p>
If the application is connected, the push service passes the notification data over
the connection. Otherwise, the push service posts a UI notification with the data.
It will be delivered when a user launches the application by selecting the posting.
        </p>
 * <p>
To receive push notifications, follow the steps below:
        </p>
 * <ul>
 * <li>Get administrative permission for an application on your device
 * <li>Register the application
 * <li>Connect to the push service
 * <li>Get notification data
 * </ul>
 * <p>
To use Push features, the application needs the <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.native.appprogramming/html/tutorials/messaging_tutorial/push_tutorial.htm#start">permission to access the Tizen Push servers</a>.
        </p>
 * <p>
For more information on the Push features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/communication_guide/push.htm">Push Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.push
 * @type PushManager
 */
Tizen.prototype.push = new PushManager();

/**
 * The TransmitSuccessCallback interface specifies the success callback that is invoked when completes successfully.
          <p>
This callback interface specifies a success method with an array of bytes as an input parameter. It is used in <em>Channel.transmit()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TransmitSuccessCallback}
 */
function TransmitSuccessCallback() {};
TransmitSuccessCallback.prototype = new Object();

/**
 * The ChannelSuccessCallback interface specifies the success callback that is invoked when a channel is open to communicate with a specific applet.
          <p>
This callback interface specifies a success method with a <em>Channel</em> object as an input parameter.
It is used in asynchronous operations such as <em>Session.openBasicChannel() </em>or <em>Session.openLogicalChannel()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ChannelSuccessCallback}
 */
function ChannelSuccessCallback() {};
ChannelSuccessCallback.prototype = new Object();

/**
 * The Channel interface is open to a Secure Element and offers methods to send Application Protocol Data Units(APDU) to the Secure Element. The channel is defined in the ISO7816-4.
 *
 * @super Object
 * @constructor
 * @return {Channel}
 */
function Channel() {};
Channel.prototype = new Object();

/**
 * The Session interface is connected to one of the readers and offers methods to control channels in a session.
 *
 * @super Object
 * @constructor
 * @return {Session}
 */
function Session() {};
Session.prototype = new Object();

/**
 * The SEServiceManagerObject interface defines what is instantiated by the Tizen object from the Tizen Platform.
          <p>
The <em>tizen.seService</em> object allows access to the functionality of the SecureElement API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEServiceManagerObject}
 */
function SEServiceManagerObject() {};
SEServiceManagerObject.prototype = new Object();

/**
 * The ReaderArraySuccessCallback callback interface provides a success callback that is invoked when a list of available Secure Element readers is retrieved.
          <p>
It specifies a success method with an array of <em>Reader</em> objects as an input parameter.
It is used in asynchronous operations such as <em>SEService.getReaders()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ReaderArraySuccessCallback}
 */
function ReaderArraySuccessCallback() {};
ReaderArraySuccessCallback.prototype = new Object();

/**
 * The SEChangeListener interface provides the success callback that is invoked when a Secure Element reader is detected or lost.
          <p>
It is used in <em>SEService.registerSEListener()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEChangeListener}
 */
function SEChangeListener() {};
SEChangeListener.prototype = new Object();

/**
 * The SessionSuccessCallback interface specifies the success callback that is invoked when a session on a specific reader is open.
          <p>
This callback interface specifies a success method with a <em>Session</em> object as an input parameter.
It is used in asynchronous operations such as <em>Reader.openSession()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SessionSuccessCallback}
 */
function SessionSuccessCallback() {};
SessionSuccessCallback.prototype = new Object();

/**
 * The SEService interface provides access to the available Secure Element readers.
          <p>
It provides access to the API functionalities through the <em>tizen.seService</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEService}
 */
function SEService() {};
SEService.prototype = new Object();

/**
 * The Reader interface that is connected to this device.
          <p>
This interface offers methods to control sessions on the reader.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Reader}
 */
function Reader() {};
Reader.prototype = new Object();

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {array} response
 * @type void
 * @memberOf TransmitSuccessCallback
 * @returns {void}
 */
TransmitSuccessCallback.prototype.onsuccess = function(response){ return; };

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {Channel} channel
 * @type void
 * @memberOf ChannelSuccessCallback
 * @returns {void}
 */
ChannelSuccessCallback.prototype.onsuccess = function(channel){ return; };

/**
 * Boolean value that indicates whether it is a basic channel.
 *
 * @type Boolean
 */
Channel.prototype.isBasicChannel = new Boolean();

/**
 * Closes a channel.
 *
 * @type void
 * @memberOf Channel
 * @returns {void}
 */
Channel.prototype.close = function(){ return; };

/**
 * Transmits an APDU command to a Secure Element. The APDU command is defined in ISO7816-4.
            <p>
Some commands that are not allowed to be sent are:
            </p>
            <ul>
              <li>
 MANAGE_CHANNEL commands.               </li>
              <li>
 SELECT by DF Name (p1=04).               </li>
              <li>
 The commands that CLA bytes with channel numbers are de-masked.               </li>
            </ul>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If the command contain an invalid value.              </li>
              <li>
 IOError - An error occurred while communicating with the Secure Element in the reader.              </li>
              <li>
 SecurityError - If the command is not allowed.              </li>
              <li>
 InvalidStateError - If this channel is closed.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} command
 * @param {TransmitSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Channel
 * @returns {void}
 */
Channel.prototype.transmit = function(command, successCallback, errorCallback){ return; };

/**
 * Gets the data as received from the application select command including the status words.
            <p>
When opening a channel, when an applet ID of secure element is selected,
a response is generated to the select command. This method retrieves the response.
            </p>
            <p>
The return value is a byte array containing the data bytes in the following order:
            </p>
            <p>
[&lt;first data byte&gt;, ..., &lt;last data byte&gt;, &lt;status word1&gt;, &lt;status word2&gt;]
            </p>
            <ul>
              <li>
Only the status words are returned if the application select command has no returned data.              </li>
              <li>
Null if an application select command has not been performed or
the selection response can not be retrieved by the reader implementation.              </li>
            </ul>
           
 *
 * @type array
 * @memberOf Channel
 * @returns {array}
 */
Channel.prototype.getSelectResponse = function(){ var ret = new array(); return ret; };

/**
 * Boolean value that indicates whether a session is closed.
 *
 * @type Boolean
 */
Session.prototype.isClosed = new Boolean();

/**
 * Opens a basic channel in a session. The basic channel (defined in the ISO7816-4 specification) is opened by default and its channel ID is . Once this channel has been opened by an application, it is considered to be "locked" to other applications, and they cannot open any channel, until the basic channel is closed. Some Secure Elements might always deny opening a basic channel.
            <p>
The optional select response data of an applet can be retrived with byte[] getSelectResponse().
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 IOError - If an error occurs while communicating with the Secure Element in the reader.              </li>
              <li>
 SecurityError - If access to this AID or the default application on this session is not allowed .              </li>
              <li>
 InvalidStateError - If this session is closed.               </li>
              <li>
 NotFoundError - If the application of the AID does not exist in the Secure Element.              </li>
              <li>
 NoChannelError - If basic channel is unavailable.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} aid
 * @param {ChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.openBasicChannel = function(aid, successCallback, errorCallback){ return; };

/**
 * Opens a logical channel in a session by the specified applet ID. The logical channel is defined in the ISO7816-4 specification.
            <p>
The optional select response data of an applet can be retrived with byte[] getSelectResponse().
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 IOError - If an error occurs while communicating with the Secure Element in the reader.              </li>
              <li>
 SecurityError - If access to this AID or the default application in this session is not allowed.              </li>
              <li>
 InvalidStateError - If this session is closed.              </li>
              <li>
 NotFoundError - If the application of the AID does not exist in the Secure Element.              </li>
              <li>
 NoChannelError - If logical channel is unavailable.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} aid
 * @param {ChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.openLogicalChannel = function(aid, successCallback, errorCallback){ return; };

/**
 * Gets the answer to reset(ATR) of a Secure Element.
 *
 * @type array
 * @memberOf Session
 * @returns {array}
 */
Session.prototype.getATR = function(){ var ret = new array(); return ret; };

/**
 * Closes a session.
 *
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.close = function(){ return; };

/**
 * Closes all channels on this session.
 *
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.closeChannels = function(){ return; };

/**
 * The SecureElement API provides functionality to communicate with applications in several Secure Elements. A Secure Element is a secure smart card chip. It can be a UICC/SIM, an embedded Secure Element, or a Secure SD card that is inserted in a device.
 *
 * @feature http://tizen.org/feature/network.secure_element
 * @type SEService
 */
SEServiceManagerObject.prototype.seService = new SEService();

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {array} readers
 * @type void
 * @memberOf ReaderArraySuccessCallback
 * @returns {void}
 */
ReaderArraySuccessCallback.prototype.onsuccess = function(readers){ return; };

/**
 * Called when a Secure Element reader is detected.
 *
 * @param {Reader} reader
 * @type void
 * @memberOf SEChangeListener
 * @returns {void}
 */
SEChangeListener.prototype.onSEReady = function(reader){ return; };

/**
 * Called when a Secure Element reader is lost.
 *
 * @param {Reader} reader
 * @type void
 * @memberOf SEChangeListener
 * @returns {void}
 */
SEChangeListener.prototype.onSENotReady = function(reader){ return; };

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {Session} session
 * @type void
 * @memberOf SessionSuccessCallback
 * @returns {void}
 */
SessionSuccessCallback.prototype.onsuccess = function(session){ return; };

/**
 * Gets all the available Secure Element readers.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any error occurs during retrieval.              </li>
            </ul>
           
 *
 * @param {ReaderArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.getReaders = function(successCallback, errorCallback){ return; };

/**
 * Registers a callback function that is invoked when an available Secure Element reader is detected.
 *
 * @param {SEChangeListener} listener
 * @type Number
 * @memberOf SEService
 * @returns {Number}
 */
SEService.prototype.registerSEListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Unregisters the listener from notifying any detection of an available Secure Element reader.
 *
 * @param {Number} id
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.unregisterSEListener = function(id){ return; };

/**
 * Shuts down Secure Elements after releasing all resources.
 *
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.shutdown = function(){ return; };

/**
 * Boolean value that indicates whether a Secure Element is present on a reader.
 *
 * @type Boolean
 */
Reader.prototype.isPresent = new Boolean();

/**
 * Gets the reader's name.
 *
 * @type String
 * @memberOf Reader
 * @returns {String}
 */
Reader.prototype.getName = function(){ var ret = new String(); return ret; };

/**
 * Opens a session on a reader.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 IOError - An error occurred in communication with the Secure Element in this reader.              </li>
              <li>
 InvalidStateError - If a Secure Element is not present on this reader.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SessionSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Reader
 * @returns {void}
 */
Reader.prototype.openSession = function(successCallback, errorCallback){ return; };

/**
 * Closes all sessions opened on a reader.
 *
 * @type void
 * @memberOf Reader
 * @returns {void}
 */
Reader.prototype.closeSessions = function(){ return; };

/**
 * The SecureElement API provides functionality to communicate with applications in several Secure Elements. A Secure Element is a secure smart card chip. It can be a UICC/SIM, an embedded Secure Element, or a Secure SD card that is inserted in a device.
 *
 * @feature http://tizen.org/feature/network.secure_element
 * @type SEService
 */
Tizen.prototype.seService = new SEService();

/**
 * The ProximitySensor interface provides methods to access proximity sensor data.
 *
 * @super Object
 * @constructor
 * @return {ProximitySensor}
 */
function ProximitySensor() {};
ProximitySensor.prototype = new Sensor();

/**
 * The SensorDataSuccessCallback interface is a callback interface that is invoked when the sensor data has changed. For example, see the Sensor interface.
 *
 * @super Object
 * @constructor
 * @return {SensorDataSuccessCallback}
 */
function SensorDataSuccessCallback() {};
SensorDataSuccessCallback.prototype = new Object();

/**
 * The SensorHRMRawData interface represents HRM sensor raw data.
 *
 * @super Object
 * @constructor
 * @return {SensorHRMRawData}
 */
function SensorHRMRawData() {};
SensorHRMRawData.prototype = new SensorData();

/**
 * The SensorMagneticData interface represents magnetic sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorMagneticData}
 */
function SensorMagneticData() {};
SensorMagneticData.prototype = new SensorData();

/**
 * The SensorLightData interface represents light sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorLightData}
 */
function SensorLightData() {};
SensorLightData.prototype = new SensorData();

/**
 * The SensorData interface is a common abstract interface used by different types of sensor data objects.
 *
 * @super Object
 * @constructor
 * @return {SensorData}
 */
function SensorData() {};
SensorData.prototype = new Object();

/**
 * The SensorService interface provides methods to access the sensor.
 *
 * @super Object
 * @constructor
 * @return {SensorService}
 */
function SensorService() {};
SensorService.prototype = new Object();

/**
 * The SensorPressureData interface represents pressure sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorPressureData}
 */
function SensorPressureData() {};
SensorPressureData.prototype = new SensorData();

/**
 * The SensorServiceManagerObject interface defines what is instantiated by the object. The object allows access to various sensors of the Tizen device.
 *
 * @super Object
 * @constructor
 * @return {SensorServiceManagerObject}
 */
function SensorServiceManagerObject() {};
SensorServiceManagerObject.prototype = new Object();

/**
 * The LightSensor interface provides methods to access light sensor data.
 *
 * @super Object
 * @constructor
 * @return {LightSensor}
 */
function LightSensor() {};
LightSensor.prototype = new Sensor();

/**
 * The Sensor interface is a base interface for specific sensor interfaces. It provides methods common to all sensor types.
 *
 * @super Object
 * @constructor
 * @return {Sensor}
 */
function Sensor() {};
Sensor.prototype = new Object();

/**
 * The SensorProximityData interface represents proximity sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorProximityData}
 */
function SensorProximityData() {};
SensorProximityData.prototype = new SensorData();

/**
 * The UltravioletSensor interface provides methods to access ultraviolet sensor data.
 *
 * @super Object
 * @constructor
 * @return {UltravioletSensor}
 */
function UltravioletSensor() {};
UltravioletSensor.prototype = new Sensor();

/**
 * The HRMRawSensor interface provides methods to access HRM sensor raw data.
 *
 * @super Object
 * @constructor
 * @return {HRMRawSensor}
 */
function HRMRawSensor() {};
HRMRawSensor.prototype = new Sensor();

/**
 * The MagneticSensor interface provides methods to access magnetic sensor data.
 *
 * @super Object
 * @constructor
 * @return {MagneticSensor}
 */
function MagneticSensor() {};
MagneticSensor.prototype = new Sensor();

/**
 * The SensorUltravioletData interface represents ultraviolet sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorUltravioletData}
 */
function SensorUltravioletData() {};
SensorUltravioletData.prototype = new SensorData();

/**
 * The PressureSensor interface provides methods to access pressure sensor data.
 *
 * @super Object
 * @constructor
 * @return {PressureSensor}
 */
function PressureSensor() {};
PressureSensor.prototype = new Sensor();

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getProximitySensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getProximitySensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 UnknownError  : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ProximitySensor
 * @returns {void}
 */
ProximitySensor.prototype.getProximitySensorData = function(successCallback, errorCallback){ return; };

/**
 * Called when the sensor data has changed.
 *
 * @param {SensorData} sensorData
 * @type void
 * @memberOf SensorDataSuccessCallback
 * @returns {void}
 */
SensorDataSuccessCallback.prototype.onsuccess = function(sensorData){ return; };

/**
 * HRM sensor light type.
 * <p>
The following values are supported:
            </p>
 * <ul>
 * <li>LED_IR - The infrared spectrum
 * <li>LED_RED - The red light spectrum
 * <li>LED_GREEN - The green light spectrum
 * </ul>
 *
 * @type String
 */
SensorHRMRawData.prototype.lightType = new String();

/**
 * HRM sensor light intensity measures the light intensity that is reflected from a blood vessel. The changes in the reported value represent blood volume changes in the microvascular bed of the tissue, and can be used to estimate heart rate.
 *
 * @type Number
 */
SensorHRMRawData.prototype.lightIntensity = new Number();

/**
 * Ambient magnetic field of the X axis in micro-Tesla (µT).
 *
 * @type Number
 */
SensorMagneticData.prototype.x = new Number();

/**
 * Ambient magnetic field of the Y axis in micro-Tesla (µT).
 *
 * @type Number
 */
SensorMagneticData.prototype.y = new Number();

/**
 * Ambient magnetic field of the Z axis in micro-Tesla (µT).
 *
 * @type Number
 */
SensorMagneticData.prototype.z = new Number();

/**
 * Accuracy of magnetic sensor data.
 * <p>
For increasing the accuracy, wave the device around in the air in figure-eight patterns.
            </p>
 *
 * @type MagneticSensorAccuracy
 */
SensorMagneticData.prototype.accuracy = new MagneticSensorAccuracy();

/**
 * Ambient light level in lux.
 *
 * @type Number
 */
SensorLightData.prototype.lightLevel = new Number();

/**
 * Gets the default sensor of the device for the given sensor type.
            <p>
The supported sensor types are hardware-dependent. <br/><br/>To check if the given <var>type</var> is supported or not, SystemInfo API can be used.
            </p>
            <ul>
              <li>
 LIGHT       - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.photometer"</em>)               </li>
              <li>
 MAGNETIC    - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.magnetometer"</em>)               </li>
              <li>
 PRESSURE    - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.barometer"</em>)               </li>
              <li>
 PROXIMITY   - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.proximity"</em>)               </li>
              <li>
 ULTRAVIOLET - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.ultraviolet"</em>)               </li>
              <li>
 HRM_RAW      - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.heart_rate_monitor"</em>)               </li>
            </ul>
           
 *
 * @param {SensorType} type
 * @type Sensor
 * @memberOf SensorService
 * @returns {Sensor}
 */
SensorService.prototype.getDefaultSensor = function(type){ var ret = new Sensor(); return ret; };

/**
 * Gets the available sensor types.
 *
 * @type array
 * @memberOf SensorService
 * @returns {array}
 */
SensorService.prototype.getAvailableSensors = function(){ var ret = new array(); return ret; };

/**
 * Pressure in millibar (hPa).
 *
 * @type Number
 */
SensorPressureData.prototype.pressure = new Number();

/**
 * The Sensor API defines interfaces and methods to manage sensor data from various sensors on the device.
 * <p>
The following sensor functionality is provided:
        </p>
 * <ul>
 * <li>Start and stop sensor
 * <li>Set and unset notification of the sensor data change
 * <li>Get current sensor data
 * </ul>
 * <p>
For more information about how to use Sensor API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/sensor.htm">Sensor Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/sensor.photometer
 * @type SensorService
 */
SensorServiceManagerObject.prototype.sensorservice = new SensorService();

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getLightSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getLightSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 UnknownError  : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf LightSensor
 * @returns {void}
 */
LightSensor.prototype.getLightSensorData = function(successCallback, errorCallback){ return; };

/**
 * Sensor type to monitor the changes.
 *
 * @type SensorType
 */
Sensor.prototype.sensorType = new SensorType();

/**
 * Starts the sensor.
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.start = function(successCallback, errorCallback){ return; };

/**
 * Stops the sensor.
 *
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.stop = function(){ return; };

/**
 * Registers a change listener to be called when sensor data of the given type changes.
            <p>
Note that the setChangeListener() method only registers the listener.
The start() method must be called to turn on the sensor, or the sensor data will not change.
            </p>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.setChangeListener = function(successCallback){ return; };

/**
 * Unregisters the sensor data change listener.
 *
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.unsetChangeListener = function(){ return; };

/**
 * Proximity state.
 *
 * @type ProximityState
 */
SensorProximityData.prototype.proximityState = new ProximityState();

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getUltravioletSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getUltravioletSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 UnknownError  : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf UltravioletSensor
 * @returns {void}
 */
UltravioletSensor.prototype.getUltravioletSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getHRMRawSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the getHRMRawSensorData method is called without calling the start method.              </li>
              <li>
 UnknownError  : An unknown error has occurred.              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf HRMRawSensor
 * @returns {void}
 */
HRMRawSensor.prototype.getHRMRawSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getMagneticSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getMagneticSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 UnknownError  : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MagneticSensor
 * @returns {void}
 */
MagneticSensor.prototype.getMagneticSensorData = function(successCallback, errorCallback){ return; };

/**
 * Ultraviolet index.
 * <p>
The ultraviolet index is an international standard measurement of the strength of ultraviolet radiation from the sun. The <em>ultravioletLevel</em> ranges from 0 to 15.
            </p>
 *
 * @type Number
 */
SensorUltravioletData.prototype.ultravioletLevel = new Number();

/**
 * Gets the current sensor data.
            <p>
Note that the start() method should be called before calling the getPressureSensorData() method to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getPressureSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 UnknownError  : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PressureSensor
 * @returns {void}
 */
PressureSensor.prototype.getPressureSensorData = function(successCallback, errorCallback){ return; };

/**
 * The Sensor API defines interfaces and methods to manage sensor data from various sensors on the device.
 * <p>
The following sensor functionality is provided:
        </p>
 * <ul>
 * <li>Start and stop sensor
 * <li>Set and unset notification of the sensor data change
 * <li>Get current sensor data
 * </ul>
 * <p>
For more information about how to use Sensor API, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/sensor.htm">Sensor Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/sensor.photometer
 * @type SensorService
 */
Tizen.prototype.sensorservice = new SensorService();

/**
 * The SoundVolumeChangeCallback interface specifies a volume change callback for getting notified about the volume changes.
 *
 * @super Object
 * @constructor
 * @return {SoundVolumeChangeCallback}
 */
function SoundVolumeChangeCallback() {};
SoundVolumeChangeCallback.prototype = new Object();

/**
 * The SoundManagerObject interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.sound object that allows accessing the functionality of the Sound API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SoundManagerObject}
 */
function SoundManagerObject() {};
SoundManagerObject.prototype = new Object();

/**
 * The SoundManager interface provides the functionalities to control the volume level.
 *
 * @super Object
 * @constructor
 * @return {SoundManager}
 */
function SoundManager() {};
SoundManager.prototype = new Object();

/**
 * The SoundDeviceInfo interface specifies the information about a sound device.
 *
 * @super Object
 * @constructor
 * @return {SoundDeviceInfo}
 */
function SoundDeviceInfo() {};
SoundDeviceInfo.prototype = new Object();

/**
 * The SoundDeviceStateChangeCallback interface specifies a sound device type change callback for getting notified when the sound device state changes.
 *
 * @super Object
 * @constructor
 * @return {SoundDeviceStateChangeCallback}
 */
function SoundDeviceStateChangeCallback() {};
SoundDeviceStateChangeCallback.prototype = new Object();

/**
 * The SoundModeChangeCallback interface specifies a mode change callback for getting notified about the sound mode changes.
 *
 * @super Object
 * @constructor
 * @return {SoundModeChangeCallback}
 */
function SoundModeChangeCallback() {};
SoundModeChangeCallback.prototype = new Object();

/**
 * Called when the volume level has changed.
 *
 * @param {SoundType} type
 * @param {Number} volume
 * @type void
 * @memberOf SoundVolumeChangeCallback
 * @returns {void}
 */
SoundVolumeChangeCallback.prototype.onsuccess = function(type, volume){ return; };

/**
 * The Sound API provides functions to control the volume level for several sound types and to check whether a specified sound device type is connected.
 * <p>
You can get the maximum volume level for system, notifications, alarm, media and so on.
Also, you can change or get the current volume level.
        </p>
 * <p>
For more information on the Sound features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/media_guide/sound.htm">Sound Guide</a>.
        </p>
 *
 * @type SoundManager
 */
SoundManagerObject.prototype.sound = new SoundManager();

/**
 * Gets the current sound mode.
 *
 * @type SoundModeType
 * @memberOf SoundManager
 * @returns {SoundModeType}
 */
SoundManager.prototype.getSoundMode = function(){ var ret = new SoundModeType(); return ret; };

/**
 * Sets the volume level for a specified sound type.
 *
 * @param {SoundType} type
 * @param {Number} volume
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.setVolume = function(type, volume){ return; };

/**
 * Gets the current volume level for a specified sound type.
 *
 * @param {SoundType} type
 * @type Number
 * @memberOf SoundManager
 * @returns {Number}
 */
SoundManager.prototype.getVolume = function(type){ var ret = new Number(); return ret; };

/**
 * Registers a listener to be called when the sound mode is changed.
 *
 * @param {SoundModeChangeCallback} callback
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.setSoundModeChangeListener = function(callback){ return; };

/**
 * Unsubscribes from receiving notification about the sound mode change.
 *
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.unsetSoundModeChangeListener = function(){ return; };

/**
 * Registers a listener to be called when the volume level is changed.
 *
 * @param {SoundVolumeChangeCallback} callback
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.setVolumeChangeListener = function(callback){ return; };

/**
 * Unsubscribes from receiving notification when the volume level is changed.
 *
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.unsetVolumeChangeListener = function(){ return; };

/**
 * Gets a list of connected sound devices.
 *
 * @type array
 * @memberOf SoundManager
 * @returns {array}
 */
SoundManager.prototype.getConnectedDeviceList = function(){ var ret = new array(); return ret; };

/**
 * Gets a list of activated sound devices.
 *
 * @type array
 * @memberOf SoundManager
 * @returns {array}
 */
SoundManager.prototype.getActivatedDeviceList = function(){ var ret = new array(); return ret; };

/**
 * Registers a listener that is to be called when the sound device state is changed.
            <p>
There are two types of device state changes:
            </p>
            <ul>
              <li>
Connectivity: When a device changes from being connected to being disconnected or from being disconnected to being connected.              </li>
              <li>
Activation: When a device chages from being activated to being deactivated or from being deactivated to being activated.              </li>
            </ul>
           
 *
 * @param {SoundDeviceStateChangeCallback} callback
 * @type Number
 * @memberOf SoundManager
 * @returns {Number}
 */
SoundManager.prototype.addDeviceStateChangeListener = function(callback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notifications when the sound device state is changed.
 *
 * @param {Number} id
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.removeDeviceStateChangeListener = function(id){ return; };

/**
 * The sound device ID
 *
 * @type Number
 */
SoundDeviceInfo.prototype.id = new Number();

/**
 * The sound device name
 *
 * @type String
 */
SoundDeviceInfo.prototype.name = new String();

/**
 * The sound device type
 *
 * @type SoundDeviceType
 */
SoundDeviceInfo.prototype.device = new SoundDeviceType();

/**
 * The sound device I/O type
 *
 * @type SoundIOType
 */
SoundDeviceInfo.prototype.direction = new SoundIOType();

/**
 * True if the sound device state is connected
 *
 * @type Boolean
 */
SoundDeviceInfo.prototype.isConnected = new Boolean();

/**
 * True if the sound device state is activated
 *
 * @type Boolean
 */
SoundDeviceInfo.prototype.isActivated = new Boolean();

/**
 * Method invoked when the sound device state changes.
 *
 * @param {SoundDeviceInfo} info
 * @type void
 * @memberOf SoundDeviceStateChangeCallback
 * @returns {void}
 */
SoundDeviceStateChangeCallback.prototype.onchanged = function(info){ return; };

/**
 * Called when the sound mode has changed.
 *
 * @param {SoundModeType} mode
 * @type void
 * @memberOf SoundModeChangeCallback
 * @returns {void}
 */
SoundModeChangeCallback.prototype.onsuccess = function(mode){ return; };

/**
 * The Sound API provides functions to control the volume level for several sound types and to check whether a specified sound device type is connected.
 * <p>
You can get the maximum volume level for system, notifications, alarm, media and so on.
Also, you can change or get the current volume level.
        </p>
 * <p>
For more information on the Sound features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/media_guide/sound.htm">Sound Guide</a>.
        </p>
 *
 * @type SoundManager
 */
Tizen.prototype.sound = new SoundManager();

/**
 * This property reflects the information of the device orientation in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceOrientation}
 */
function SystemInfoDeviceOrientation() {};
SystemInfoDeviceOrientation.prototype = new SystemInfoProperty();

/**
 * This property reflects the locale information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoLocale}
 */
function SystemInfoLocale() {};
SystemInfoLocale.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBuild}
 */
function SystemInfoBuild() {};
SystemInfoBuild.prototype = new SystemInfoProperty();

/**
 * This property reflects the state of the CPUs available to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCpu}
 */
function SystemInfoCpu() {};
SystemInfoCpu.prototype = new SystemInfoProperty();

/**
 * This property exposes the data storage devices connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorage}
 */
function SystemInfoStorage() {};
SystemInfoStorage.prototype = new SystemInfoProperty();

/**
 * Defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a tizen.systeminfo object that allows accessing the
functionality of the SystemInfo API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoObject}
 */
function SystemInfoObject() {};
SystemInfoObject.prototype = new Object();

/**
 * SystemInfoDeviceCapability object.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceCapability}
 */
function SystemInfoDeviceCapability() {};
SystemInfoDeviceCapability.prototype = new Object();

/**
 * This property reflects the general state of the system's battery
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBattery}
 */
function SystemInfoBattery() {};
SystemInfoBattery.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the Wi-Fi network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoWifiNetwork}
 */
function SystemInfoWifiNetwork() {};
SystemInfoWifiNetwork.prototype = new SystemInfoProperty();

/**
 * This property reflects the peripheral information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPeripheral}
 */
function SystemInfoPeripheral() {};
SystemInfoPeripheral.prototype = new SystemInfoProperty();

/**
 * Systeminfo specific success callback.
          <p>
This callback interface specifies a success callback with SystemInfoProperty as input argument.
It is used in asynchronous operations, such as getPropertyValueArray() or addPropertyValueArrayChangeListener()
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPropertyArraySuccessCallback}
 */
function SystemInfoPropertyArraySuccessCallback() {};
SystemInfoPropertyArraySuccessCallback.prototype = new Object();

/**
 * Systeminfo specific success callback.
          <p>
This callback interface specifies a success callback with SystemInfoProperty as input argument.
It is used in asynchronous
operations, such as getPropertyValue() or addPropertyValueChangeListener()
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPropertySuccessCallback}
 */
function SystemInfoPropertySuccessCallback() {};
SystemInfoPropertySuccessCallback.prototype = new Object();

/**
 * This property reflects the information of the Display.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDisplay}
 */
function SystemInfoDisplay() {};
SystemInfoDisplay.prototype = new SystemInfoProperty();

/**
 * This entry interface queries the information of a system.
          <p>
This API offers methods for retrieving system information
and for subscribing notifications of system information changes.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfo}
 */
function SystemInfo() {};
SystemInfo.prototype = new Object();

/**
 * This property reflects the information of the SIM card information.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoSIM}
 */
function SystemInfoSIM() {};
SystemInfoSIM.prototype = new SystemInfoProperty();

/**
 * This is a common abstract interface used by different types of system information objects.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoProperty}
 */
function SystemInfoProperty() {};
SystemInfoProperty.prototype = new Object();

/**
 * This property represents information about the memory state on the device system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoMemory}
 */
function SystemInfoMemory() {};
SystemInfoMemory.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the Cellular network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCellularNetwork}
 */
function SystemInfoCellularNetwork() {};
SystemInfoCellularNetwork.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the data network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoNetwork}
 */
function SystemInfoNetwork() {};
SystemInfoNetwork.prototype = new SystemInfoProperty();

/**
 * This property exposes a single storage device connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorageUnit}
 */
function SystemInfoStorageUnit() {};
SystemInfoStorageUnit.prototype = new SystemInfoProperty();

/**
 * Represents the status of the current device orientation.
 *
 * @type SystemInfoDeviceOrientationStatus
 */
SystemInfoDeviceOrientation.prototype.status = new SystemInfoDeviceOrientationStatus();

/**
 * whether the device is in autorotation.
 *
 * @type Boolean
 */
SystemInfoDeviceOrientation.prototype.isAutoRotation = new Boolean();

/**
 * Indicates the current language setting in the (LANGUAGE)_(REGION) syntax. The language setting is in the ISO 630-2 format and the region setting is in the ISO 3166-1 format. The language setting is case-sensitive.
 *
 * @type String
 */
SystemInfoLocale.prototype.language = new String();

/**
 * Indicates the current country setting in the (LANGUAGE)_(REGION) syntax. The language setting is in the ISO 630-2 format and the region setting is in the ISO 3166-1 format. The country setting is case-sensitive.
 *
 * @type String
 */
SystemInfoLocale.prototype.country = new String();

/**
 * Represents the model name of the current device.
 *
 * @type String
 */
SystemInfoBuild.prototype.model = new String();

/**
 * Represents the manufacturer of the device.
 *
 * @type String
 */
SystemInfoBuild.prototype.manufacturer = new String();

/**
 * Represents the build version information of the device.
 *
 * @type String
 */
SystemInfoBuild.prototype.buildVersion = new String();

/**
 * An attribute to indicate the current CPU load, as a number between and , representing the minimum and maximum values allowed on this system. Any threshold parameter used in a watch function to monitor this property applies to this attribute.
 *
 * @type Number
 */
SystemInfoCpu.prototype.load = new Number();

/**
 * The array of storage units connected to this device.
 *
 * @type array
 */
SystemInfoStorage.prototype.units = new array();

/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 * <p>
This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values.
        </p>
 * <p>
The following provides an overview of the tree data structure:
        </p>
 * <ul>
 * <li>BATTERY
 * <li>CPU
 * <li>STORAGE
 * <li>DISPLAY
 * <li>DEVICE_ORIENTATION
 * <li>BUILD
 * <li>LOCALE
 * <li>NETWORK
 * <li>WIFI_NETWORK
 * <li>CELLULAR_NETWORK
 * <li>SIM
 * <li>PERIPHERAL
 * <li>MEMORY
 * </ul>
 * <p>
Not all above properties may be available on every Tizen device. For instance, a device may not support the telephony feature. In that case, <var>CELLULAR_NETWORK</var> and <var>SIM</var> are not available.<br/><br/>To check the available <var>SystemInfoPropertyId</var>, <em>tizen.systeminfo.getCapability()</em> can be used.
        </p>
 * <ul>
 * <li>BATTERY - tizen.systeminfo.getCapability()
 * <li>DISPLAY - tizen.systeminfo.getCapability()
 * <li>WIFI_NETWORK - tizen.systeminfo.getCapability()
 * <li>CELLULAR_NETWORK - tizen.systeminfo.getCapability()
 * <li>SIM - tizen.systeminfo.getCapability()
 * </ul>
 * <p>
For more information on the SystemInfo features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/systeminfo.htm">System Information Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.wifi
 * @type SystemInfo
 */
SystemInfoObject.prototype.systeminfo = new SystemInfo();

/**
 * Indicates whether the device supports Bluetooth.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.bluetooth = new Boolean();

/**
 * Indicates whether the device supports NFC.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfc = new Boolean();

/**
 * Indicates whether the device supports NFC reserved push.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfcReservedPush = new Boolean();

/**
 * The number of point in Multi-point touch.
 *
 * @type Number
 */
SystemInfoDeviceCapability.prototype.multiTouchCount = new Number();

/**
 * Indicates whether the device supports the built-in Keyboard.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboard = new Boolean();

/**
 * Indicates whether the device supports the built-in keyboard layout.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboardLayout = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifi = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi direct.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifiDirect = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.opengles = new Boolean();

/**
 * The device 3DC texture format for OpenGL-ES. One example of possible output is as follows: "3dc/atc/etc/ptc/pvrtc/utc"
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.openglestextureFormat = new String();

/**
 * Indicates whether the device supports OpenGL-ES version 1.1.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion1_1 = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES version 2.0.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion2_0 = new Boolean();

/**
 * Indicates whether the device supports FM radio.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.fmRadio = new Boolean();

/**
 * The version of the platform in the format. For example, represents a platform version where the major version is and the minor and build versions are .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformVersion = new String();

/**
 * The version of the Web API in the format. For example, represents a web api version where the major version is and the minor version is .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.webApiVersion = new String();

/**
 * The version of the native API in the format.
 * <p>
For example, <var>1.0</var> represents a native api version where the major version is <var>1 </var>and the minor version is <var>0</var>.
If a device doesn't provide Tizen native API, nativeApiVersion will be a empty string.
            </p>
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.nativeApiVersion = new String();

/**
 * The name of the platform.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformName = new String();

/**
 * Indicates whether the device supports camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.camera = new Boolean();

/**
 * Indicates whether the device supports front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFront = new Boolean();

/**
 * Indicates whether the device supports flash on the front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFrontFlash = new Boolean();

/**
 * Indicates whether the device supports back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBack = new Boolean();

/**
 * Indicates whether the device supports flash on the back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBackFlash = new Boolean();

/**
 * Indicates whether the device supports GPS or not.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.location = new Boolean();

/**
 * Indicates whether the device supports GPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationGps = new Boolean();

/**
 * Indicates whether the device supports WPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationWps = new Boolean();

/**
 * Indicates whether the device supports microphone.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.microphone = new Boolean();

/**
 * Indicates whether the device supports USB host.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbHost = new Boolean();

/**
 * Indicates whether the device supports USB accessory.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbAccessory = new Boolean();

/**
 * Indicates whether the device supports RCA output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputRca = new Boolean();

/**
 * Indicates whether the device supports HDMI output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputHdmi = new Boolean();

/**
 * The device CPU architecture. The possible values for this attribute are: armv6, armv7, x86.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreCpuArch = new String();

/**
 * The device FPU architecture. The possible values for this attribute are: vfpv3 / sse2 / sse3 / ssse3.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreFpuArch = new String();

/**
 * Indicates whether the device supports VOIP.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.sipVoip = new Boolean();

/**
 * Indicates the Tizen ID, not device's unique ID since Tizen 2.3.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.duid = new String();

/**
 * Indicates whether the device supports speech recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechRecognition = new Boolean();

/**
 * Indicates whether the device supports speech synthesis.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechSynthesis = new Boolean();

/**
 * Indicates whether the device supports Accelerometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometer = new Boolean();

/**
 * Indicates whether the device supports Accelerometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Barometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometer = new Boolean();

/**
 * Indicates whether the device supports Barometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Gyroscope sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscope = new Boolean();

/**
 * Indicates whether the device supports Gyroscope sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscopeWakeup = new Boolean();

/**
 * Indicates whether the device supports Magnetometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometer = new Boolean();

/**
 * Indicates whether the device supports Magnetometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Photometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometer = new Boolean();

/**
 * Indicates whether the device supports Photometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Proximity sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximity = new Boolean();

/**
 * Indicates whether the device supports Proximity sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximityWakeup = new Boolean();

/**
 * Indicates whether the device supports Tiltmeter sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeter = new Boolean();

/**
 * Indicates whether the device supports Tiltmeter sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeterWakeup = new Boolean();

/**
 * Indicates whether the device supports data encryption.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.dataEncryption = new Boolean();

/**
 * Indicates whether the device supports hardware acceleration for 2D/3D graphics.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.graphicsAcceleration = new Boolean();

/**
 * Indicates whether the device supports push service.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.push = new Boolean();

/**
 * Indicates whether the device supports the telephony feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephony = new Boolean();

/**
 * Indicates whether the device supports the mms feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonyMms = new Boolean();

/**
 * Indicates whether the device supports the sms feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonySms = new Boolean();

/**
 * Indicates whether the device supports the screen normal size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSizeNormal = new Boolean();

/**
 * Indicates whether the device supports the 480 * 800 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize480_800 = new Boolean();

/**
 * Indicates whether the device supports the 720 * 1280 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize720_1280 = new Boolean();

/**
 * Indicates whether the device supports auto rotation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.autoRotation = new Boolean();

/**
 * Indicates whether the device supports shell app widget(dynamic box).
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.shellAppWidget = new Boolean();

/**
 * Indicates whether the device supports vision image recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionImageRecognition = new Boolean();

/**
 * Indicates whether the device supports vision qrcode generation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeGeneration = new Boolean();

/**
 * Indicates whether the device supports vision qrcode recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeRecognition = new Boolean();

/**
 * Indicates whether the device supports vision face recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionFaceRecognition = new Boolean();

/**
 * Indicates whether the device supports secure element.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.secureElement = new Boolean();

/**
 * Indicates whether the device supports native osp API.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nativeOspCompatible = new Boolean();

/**
 * Represents the profile of the current device.
 *
 * @type SystemInfoProfile
 */
SystemInfoDeviceCapability.prototype.profile = new SystemInfoProfile();

/**
 * An attribute to specify the remaining level of an internal battery, scaled from to :
 * <ul>
 * <li>indicates that the battery level is the lowest and the system is about to enter shutdown mode.
 * <li>indicates that the system's charge is maximum.
 * </ul>
 * <p>
Any threshold parameter used in a watch operation to monitor this property applies to this attribute.
            </p>
 *
 * @type Number
 */
SystemInfoBattery.prototype.level = new Number();

/**
 * Indicates whether the battery source is currently charging.
 *
 * @type Boolean
 */
SystemInfoBattery.prototype.isCharging = new Boolean();

/**
 * Represents the status (ON or OFF) of the Wi-Fi interface.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.status = new String();

/**
 * Represents the SSID of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ssid = new String();

/**
 * Represents the IPv4 address of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ipv6Address = new String();

/**
 * Represents the MAC address of the Wi-Fi interface.
 * <p>
It is written in MM:MM:MM:SS:SS:SS format.
            </p>
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.macAddress = new String();

/**
 * This connection's signal strength, as a normalized value between 0 (no signal detected) and 1 (the level is at its maximum value).
 *
 * @type Number
 */
SystemInfoWifiNetwork.prototype.signalStrength = new Number();

/**
 * Represents the video out status.
 *
 * @type Boolean
 */
SystemInfoPeripheral.prototype.isVideoOutputOn = new Boolean();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @param {array} properties
 * @type void
 * @memberOf SystemInfoPropertyArraySuccessCallback
 * @returns {void}
 */
SystemInfoPropertyArraySuccessCallback.prototype.onsuccess = function(properties){ return; };

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @param {SystemInfoProperty} property
 * @type void
 * @memberOf SystemInfoPropertySuccessCallback
 * @returns {void}
 */
SystemInfoPropertySuccessCallback.prototype.onsuccess = function(property){ return; };

/**
 * The total number of addressable pixels in the horizontal direction of a rectangular entity (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionWidth = new Number();

/**
 * The total number of addressable pixels in the vertical direction of a rectangular element (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionHeight = new Number();

/**
 * Resolution of this device, along its width, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchWidth = new Number();

/**
 * Resolution of this device, along its height, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchHeight = new Number();

/**
 * The display's physical width in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalWidth = new Number();

/**
 * The display's physical height in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalHeight = new Number();

/**
 * The current brightness of a display ranging between to .
 *
 * @type Number
 */
SystemInfoDisplay.prototype.brightness = new Number();

/**
 * Gets the total amount of system memory (in bytes).
 *
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getTotalMemory = function(){ var ret = new Number(); return ret; };

/**
 * Gets the amount of memory that is not in use (in bytes).
 *
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getAvailableMemory = function(){ var ret = new Number(); return ret; };

/**
 * Gets the capabilities of the device.
            <p>
The function must synchronously acquire the capabilities of the device.
            </p>
           
 *
 * @type SystemInfoDeviceCapability
 * @memberOf SystemInfo
 * @returns {SystemInfoDeviceCapability}
 */
SystemInfo.prototype.getCapabilities = function(){ var ret = new SystemInfoDeviceCapability(); return ret; };

/**
 * Gets a device capability related to a given key.
            <p>
See the available <a href="./systeminfo_capability_keys.html">device capability keys</a>.
            </p>
           
 *
 * @param {String} key
 * @type any
 * @memberOf SystemInfo
 * @returns {any}
 */
SystemInfo.prototype.getCapability = function(key){ var ret = new any(); return ret; };

/**
 * Gets the number of system property information provided for a particular system property.
            <p>
That is the length of array retrieved by the getPropertyValueArray() method for the given property.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getCount = function(property){ var ret = new Number(); return ret; };

/**
 * Gets the current value of a specified system property.
            <p>
The function must asynchronously acquire the current value of the requested property. If it is successful,
the successCallback must be invoked with an object containing the information provided by the property.
            </p>
            <p>
The <em>ErrorCallback</em> method can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported. (since Tizen 2.3)              </li>
            </ul>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.getPropertyValue = function(property, successCallback, errorCallback){ return; };

/**
 * Gets the current values of a specified system property.
            <p>
It is recommended that you check if a device provides one or more than one value for a particular system property via getCount().
            </p>
            <p>
If one particular system property is provided on a device, it returns an array containing one SystemInfoProperty object through <em>SystemInfoPropertyArraySuccessCallback</em> method.<br/>If more than one particular system property is provided, multiple SystemInfoProperty objects are returned.
            </p>
            <p>
The <em>ErrorCallback</em> method can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported.              </li>
            </ul>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertyArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.getPropertyValueArray = function(property, successCallback, errorCallback){ return; };

/**
 * Adds a listener to allow tracking of changes in one or more system properties.
            <p>
When called, it immediately returns and then asynchronously starts a watch process defined by the following steps:
            </p>
            <p>
1. Register the successCallback to receive system events that the status of the requested properties may have changed.
            </p>
            <p>
2. When a system event is successfully received invoke the associated successCallback with an object containing the property
values.
            </p>
            <p>
3. Repeat step 2 until removePropertyValueChangeListener function is called.
            </p>
            <p>
There are device properties which are never changed (e.g. "BUILD") and properties which are not changed on some devices
(e.g. "DEVICE_ORIENTATION" in Tizen TV device). The <em>addPropertyValueChangeListener()</em> method accepts
any identifier of these properties, but the listener added for them will not be invoked.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {SystemInfoOptions} options
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.addPropertyValueChangeListener = function(property, successCallback, options, errorCallback){ var ret = new Number(); return ret; };

/**
 * Adds a listener to allow tracking of changes in one or more values of a system property.
            <p>
The <em>ErrorCallback</em> method can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported. (since Tizen 2.3)<br/>For example, monitoring <var>CELLULAR_NETWORK</var> changes is not supported on a device which does not support the telephony feature.
              </li>
            </ul>
            <p>
There are device properties which never change (for example "BUILD") and properties which do not change on the current platform
(for example "DEVICE_ORIENTATION" for some platforms). The <em>addPropertyValueChangeListener()</em> method accepts
any identifier of these properties, but the listener added for them will not be invoked.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertyArraySuccessCallback} successCallback
 * @param {SystemInfoOptions} options
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.addPropertyValueArrayChangeListener = function(property, successCallback, options, errorCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes notifications for property changes.
            <p>
If a valid listenerId argument is passed that corresponds to a subscription
already place, then the watch process MUST immediately terminate and no further
callback is invoked. If the listenerId argument does not correspond to a valid subscription,
the method should return without any further action.
            </p>
           
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.removePropertyValueChangeListener = function(listenerId){ return; };

/**
 * Represents the SIM card state.
 *
 * @type SystemInfoSimState
 */
SystemInfoSIM.prototype.state = new SystemInfoSimState();

/**
 * Represents the Operator Name String (ONS) of Common PCN Handset Specification (CPHS) in SIM card.
 *
 * @type String
 */
SystemInfoSIM.prototype.operatorName = new String();

/**
 * Represents the SIM card subscriber number.
 *
 * @type String
 */
SystemInfoSIM.prototype.msisdn = new String();

/**
 * Represents the Integrated Circuit Card ID.
 *
 * @type String
 */
SystemInfoSIM.prototype.iccid = new String();

/**
 * Represents the Mobile Country Code (MCC) of SIM provider.
 *
 * @type Number
 */
SystemInfoSIM.prototype.mcc = new Number();

/**
 * Represents the Mobile Network Code (MNC) of SIM provider.
 *
 * @type Number
 */
SystemInfoSIM.prototype.mnc = new Number();

/**
 * Represents the Mobile Subscription Identification Number (MSIN) of SIM provider.
 *
 * @type String
 */
SystemInfoSIM.prototype.msin = new String();

/**
 * Represents the Service Provider Name (SPN) of SIM card.
 *
 * @type String
 */
SystemInfoSIM.prototype.spn = new String();

/**
 * Represents the low memory state.
 *
 * @type SystemInfoLowMemoryStatus
 */
SystemInfoMemory.prototype.status = new SystemInfoLowMemoryStatus();

/**
 * Represents the status (ON or OFF) of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.status = new String();

/**
 * Represents an Access Point Name of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.apn = new String();

/**
 * Represents the IPv4 address of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.ipv6Address = new String();

/**
 * Represents Mobile Country Code (MCC) of the cellular network.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.mcc = new Number();

/**
 * Represents Mobile Network Code (MNC) of the cellular network. MNC is used in combination with MCC (also known as a "MCC / MNC tuple") to uniquely identify a mobile phone operator/carrier using the GSM, CDMA, iDEN, TETRA and UMTS public land mobile networks and some satellite mobile networks.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.mnc = new Number();

/**
 * Represents Cell Id.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.cellId = new Number();

/**
 * Represents Location Area Code.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.lac = new Number();

/**
 * Whether the connection is set up while the device is roaming.
 *
 * @type Boolean
 */
SystemInfoCellularNetwork.prototype.isRoaming = new Boolean();

/**
 * Indicates whether the device is in flight mode.
 *
 * @type Boolean
 */
SystemInfoCellularNetwork.prototype.isFlightMode = new Boolean();

/**
 * Represents the International Mobile Equipment Identity (IMEI).
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.imei = new String();

/**
 * Represents the network type of the current data network.
 *
 * @type SystemInfoNetworkType
 */
SystemInfoNetwork.prototype.networkType = new SystemInfoNetworkType();

/**
 * The type of a storage device. The value is one of the constants defined for this type.
 * <p>
The supported storage unit types are:
            </p>
 * <ul>
 * <li>UNKNOWN
 * <li>INTERNAL
 * <li>USB_DEVICE
 * <li>USB_HOST
 * <li>MMC
 * </ul>
 *
 * @type String
 */
SystemInfoStorageUnit.prototype.type = new String();

/**
 * The amount of data that this device can hold, in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.capacity = new Number();

/**
 * The amount of available data that this device can hold, in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.availableCapacity = new Number();

/**
 * An attribute to indicate whether a device can be removed or not.
 * <p>
The following values are supported:
            </p>
 * <ul>
 * <li>- If this storage unit can be removed from the system (such as an sdcard unplugged)
 * <li>- If this storage unit cannot be removed from the system
 * </ul>
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemovable = new Boolean();

/**
 * true if this unit can be removed from the system (such as an sdcard unplugged), false otherwise.
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemoveable = new Boolean();

/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 * <p>
This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values.
        </p>
 * <p>
The following provides an overview of the tree data structure:
        </p>
 * <ul>
 * <li>BATTERY
 * <li>CPU
 * <li>STORAGE
 * <li>DISPLAY
 * <li>DEVICE_ORIENTATION
 * <li>BUILD
 * <li>LOCALE
 * <li>NETWORK
 * <li>WIFI_NETWORK
 * <li>CELLULAR_NETWORK
 * <li>SIM
 * <li>PERIPHERAL
 * <li>MEMORY
 * </ul>
 * <p>
Not all above properties may be available on every Tizen device. For instance, a device may not support the telephony feature. In that case, <var>CELLULAR_NETWORK</var> and <var>SIM</var> are not available.<br/><br/>To check the available <var>SystemInfoPropertyId</var>, <em>tizen.systeminfo.getCapability()</em> can be used.
        </p>
 * <ul>
 * <li>BATTERY - tizen.systeminfo.getCapability()
 * <li>DISPLAY - tizen.systeminfo.getCapability()
 * <li>WIFI_NETWORK - tizen.systeminfo.getCapability()
 * <li>CELLULAR_NETWORK - tizen.systeminfo.getCapability()
 * <li>SIM - tizen.systeminfo.getCapability()
 * </ul>
 * <p>
For more information on the SystemInfo features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/systeminfo.htm">System Information Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.wifi
 * @type SystemInfo
 */
Tizen.prototype.systeminfo = new SystemInfo();

/**
 * The SystemSettingManager interface is the top-level interface for the SystemSetting API that provides access to the module functionalities.
 *
 * @super Object
 * @constructor
 * @return {SystemSettingManager}
 */
function SystemSettingManager() {};
SystemSettingManager.prototype = new Object();

/**
 * The SystemSettingSuccessCallback interface defines the success callback for getProperty().
 *
 * @super Object
 * @constructor
 * @return {SystemSettingSuccessCallback}
 */
function SystemSettingSuccessCallback() {};
SystemSettingSuccessCallback.prototype = new Object();

/**
 * The SystemSettingObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a <em>tizen.systemsetting </em>object that allows accessing the functionality of the SystemSetting API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemSettingObject}
 */
function SystemSettingObject() {};
SystemSettingObject.prototype = new Object();

/**
 * Sets the property of a device.
            <p>
This method allows the user to set the image or sound file specified as an input parameter as the wallpaper or ringtone of a device.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
NotSupportedError - If the given <var>type</var> is not supported on the device               </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SystemSettingType} type
 * @param {String} value
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemSettingManager
 * @returns {void}
 */
SystemSettingManager.prototype.setProperty = function(type, value, successCallback, errorCallback){ return; };

/**
 * Gets the value of the property of a device.
            <p>
This method allows the user to get the value of the specified system property as wallpaper or ringtone of a device.
            </p>
           
 *
 * @param {SystemSettingType} type
 * @param {SystemSettingSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemSettingManager
 * @returns {void}
 */
SystemSettingManager.prototype.getProperty = function(type, successCallback, errorCallback){ return; };

/**
 * Called when the value of the system setting property is successfully retrieved.
 *
 * @param {String} value
 * @type void
 * @memberOf SystemSettingSuccessCallback
 * @returns {void}
 */
SystemSettingSuccessCallback.prototype.onsuccess = function(value){ return; };

/**
 * The SystemSetting API provides interfaces and methods providing web applications with access to various values of the system.
 * <p>
This API provides an interface and methods through features such as:
        </p>
 * <ul>
 * <li>HOME_SCREEN
 * <li>LOCK_SCREEN
 * <li>INCOMING_CALL
 * <li>NOTIFICATION_EMAIL
 * </ul>
 * <p>
SystemSetting API may not be provided in some devices.
The API capability can be checked by tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/systemsetting"</em>).
        </p>
 * <p>
In addition, not all the above properties may be available even though a device supports SystemSetting API. For instance, a watch device may provide the home screen image but may not support the lock screen wallpaper. <br/><br/>To check if <var>SystemSettingType</var>(e.g. HOME_SCREEN, LOCK_SCREEN and so on) is supported or not, use SystemInformation API.
        </p>
 * <ul>
 * <li>HOME_SCREEN - tizen.systeminfo.getCapability()
 * <li>LOCK_SCREEN - tizen.systeminfo.getCapability()
 * <li>INCOMING_CALL - tizen.systeminfo.getCapability()
 * <li>NOTIFICATION_EMAIL - tizen.systeminfo.getCapability()
 * </ul>
 * <p>
For more information on the SystemSetting features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/systemsetting.htm">System Setting Guide</a>.
        </p>
 *
 * @type SystemSettingManager
 */
SystemSettingObject.prototype.systemsetting = new SystemSettingManager();

/**
 * The SystemSetting API provides interfaces and methods providing web applications with access to various values of the system.
 * <p>
This API provides an interface and methods through features such as:
        </p>
 * <ul>
 * <li>HOME_SCREEN
 * <li>LOCK_SCREEN
 * <li>INCOMING_CALL
 * <li>NOTIFICATION_EMAIL
 * </ul>
 * <p>
SystemSetting API may not be provided in some devices.
The API capability can be checked by tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/systemsetting"</em>).
        </p>
 * <p>
In addition, not all the above properties may be available even though a device supports SystemSetting API. For instance, a watch device may provide the home screen image but may not support the lock screen wallpaper. <br/><br/>To check if <var>SystemSettingType</var>(e.g. HOME_SCREEN, LOCK_SCREEN and so on) is supported or not, use SystemInformation API.
        </p>
 * <ul>
 * <li>HOME_SCREEN - tizen.systeminfo.getCapability()
 * <li>LOCK_SCREEN - tizen.systeminfo.getCapability()
 * <li>INCOMING_CALL - tizen.systeminfo.getCapability()
 * <li>NOTIFICATION_EMAIL - tizen.systeminfo.getCapability()
 * </ul>
 * <p>
For more information on the SystemSetting features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/systemsetting.htm">System Setting Guide</a>.
        </p>
 *
 * @type SystemSettingManager
 */
Tizen.prototype.systemsetting = new SystemSettingManager();

/**
 * The TimeManagerObject interface defines what is instantiated in the tizen object by the Tizen Platform.
          <p>
There will be a <em>tizen.time</em> object that allows accessing the
functionality of the Time API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TimeManagerObject}
 */
function TimeManagerObject() {};
TimeManagerObject.prototype = new Object();

/**
 * The TimeUtil interface that provides access to the time API.
          <p>
This interface offers methods to manage date/time as well as timezones such as:
          </p>
          <ul>
            <li>
Get the current date/time using getCurrentDateTime().            </li>
            <li>
Get timezones using getLocalTimezone() and getAvailableTimezones().            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {TimeUtil}
 */
function TimeUtil() {};
TimeUtil.prototype = new Object();

/**
 * The TZDate interface represents information regarding a given date/time in a predefined timezone. If its date/time exceeds the platform limit, TZDate will be invalid.
 *
 * @super Object
 * @constructor
 * @return {TZDate}
 */
function TZDate() {};
TZDate.prototype = new Object();

/**
 * The TimeDuration interface that contains the length and its associated time unit.
 *
 * @super Object
 * @constructor
 * @return {TimeDuration}
 */
function TimeDuration() {};
TimeDuration.prototype = new Object();

/**
 * The Time API provides information regarding date/time and time zones.
 * <p>
The JavaScript Date object does not have full timezone support.
Date objects allow only simple representations to denote a particular location's
offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
that a location is 5 hours and 30 minutes ahead of UTC +00:00.
The issue with this method is not getting the correct
local time for a given date. The existing methods are sufficient for this purpose.
The issue is correctly converting to and from local time and UTC for all points in
time - in any of the past, present, and future - based on an initial time provided.
This is important for defining relative dates, where a time in a given location may
observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
or any other changes that may occur to a location's time zone over time.
Without the communication of the explicit time zone rules governing a given date and
time, the ability to effectively calculate the offset of the local time to UTC or to
any other time zone at any point in the past or future is lost.
        </p>
 * <p>
This API can be used to get TZDate objects with full time zone support, convert them
between timezones, retrieve available timezones.
        </p>
 * <p>
For more information on the Time features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/time.htm">Time Guide</a>.
        </p>
 *
 * @type TimeUtil
 */
TimeManagerObject.prototype.time = new TimeUtil();

/**
 * Gets the current date/time.
 *
 * @type TZDate
 * @memberOf TimeUtil
 * @returns {TZDate}
 */
TimeUtil.prototype.getCurrentDateTime = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets the identifier of the local system timezone.
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getLocalTimezone = function(){ var ret = new String(); return ret; };

/**
 * Gets synchronously the identifiers of the timezones supported by the device.
            <p>
Zero or more slashes separate different components of a timezone identifier,
with the most general descriptor first and the most specific one last. For example,
'Europe/Berlin', 'America/Argentina/Buenos_Aires'.
            </p>
           
 *
 * @type array
 * @memberOf TimeUtil
 * @returns {array}
 */
TimeUtil.prototype.getAvailableTimezones = function(){ var ret = new array(); return ret; };

/**
 * 
            <p>
Gets the date format according to the system's locale settings.
            </p>
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"d" = day number (1 to 31)              </li>
              <li>
"D" = day name              </li>
              <li>
"m" = month number (1 to 12)              </li>
              <li>
"M" = month name              </li>
              <li>
"y" = year              </li>
            </ul>
            <p>
Examples of string formats include: "d/m/y", "y-d-m", "D, M d y".
            </p>
           
 *
 * @param {Boolean} shortformat
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getDateFormat = function(shortformat){ var ret = new String(); return ret; };

/**
 * 
            <p>
Gets the time format according to the system's locale settings.
            </p>
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"h" = hours (0 to 23 or 1 to 12 if AM/PM display)              </li>
              <li>
"m" = minutes (0 to 59)              </li>
              <li>
"s" = seconds (0 to 59)              </li>
              <li>
"ap" = AM/PM display              </li>
            </ul>
            <p>
Examples of string formats include: "h:m:s ap", "h:m:s".
            </p>
           
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getTimeFormat = function(){ var ret = new String(); return ret; };

/**
 * Checks whether the given year is a leap year.
 *
 * @param {Number} year
 * @type Boolean
 * @memberOf TimeUtil
 * @returns {Boolean}
 */
TimeUtil.prototype.isLeapYear = function(year){ var ret = new Boolean(); return ret; };

/**
 * Sets a listener to receive notification of changes to the time/date on a device.
            <p>
Listener set with <em>setTimezoneChangeListener()</em> method is called when device time was set by the user. <br/>            </p>
           
 *
 * @param {SuccessCallback} changeCallback
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.setDateTimeChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to stop receiving notification of changes to the time/date on a device.
 *
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.unsetDateTimeChangeListener = function(){ return; };

/**
 * Sets a listener to receive notification of changes to the time zone on a device.
            <p>
Listener set with <em>setTimezoneChangeListener()</em> method is called when device time zone has changed.
            </p>
           
 *
 * @param {SuccessCallback} changeCallback
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.setTimezoneChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to stop receiving notification of changes to the time zone on a device.
 *
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.unsetTimezoneChangeListener = function(){ return; };

/**
 * Gets the day of the month (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month (from 1-31).
            <p>
If it tries to set the day bigger than the last day of the month or smaller than 1, it will be calculated automatically.
For example, if TZDate's month is May and parameter is 32, it will be June 1.
            </p>
           
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setDate = function(date){ return; };

/**
 * Gets the day of the week (from 0-6).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDay = function(){ var ret = new Number(); return ret; };

/**
 * Gets the year.
            <p>
Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year.
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setFullYear = function(year){ return; };

/**
 * Gets the hour (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour (0-23).
            <p>
If it tries to set the hour bigger than 23 or smaller than 0, it will be calculated automatically.
For example, if hours is 24, it will set 0 and add to a date.
            </p>
           
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setHours = function(hours){ return; };

/**
 * Gets the milliseconds (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds (from 0-999).
            <p>
If it tries to set the millisecond bigger than 999 or smaller than 0, it will be calculated automatically.
For example, if ms is 1000, it will set 0 and add to a second.
            </p>
           
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMilliseconds = function(ms){ return; };

/**
 * Gets the minutes (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes.
            <p>
If it tries to set the minute bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if minutes is 60, it will set 0 and add to an hour.
            </p>
           
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMinutes = function(minutes){ return; };

/**
 * Gets the month (from 0-11).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month (from 0-11).
            <p>
If it tries to set the month bigger than 11 or smaller than 0, it will be calculated automatically.
For example, if month is 12, it will set 0 and add to a year.
            </p>
           
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMonth = function(month){ return; };

/**
 * Gets the seconds (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds (from 0-59).
            <p>
If it tries to set the second bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if seconds is 60, it will set 0 and add to a minute.
            </p>
           
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setSeconds = function(seconds){ return; };

/**
 * Gets the day of the month, according to universal time (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month, according to universal time (from 1-31).
            <p>
If it tries to set the day bigger than the last day of the month or smaller than 1, it will be calculated automatically.
For example, if TZDate's month is May and date is 32, it will be June 1.
            </p>
           
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCDate = function(date){ return; };

/**
 * Gets the day of the week, according to universal time (from 0-6).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDay = function(){ var ret = new Number(); return ret; };

/**
 * Gets the year, according to universal time.
            <p>
Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year, according to universal time.
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCFullYear = function(year){ return; };

/**
 * Gets the hour, according to universal time (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour, according to universal time (0-23).
            <p>
If it tries to set the hour bigger than 23 or smaller than 0, it will be calculated automatically.
For example, if hours is 24, it will set 0 and add to a date.
            </p>
           
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCHours = function(hours){ return; };

/**
 * Gets the milliseconds, according to universal time (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds, according to universal time (from 0-999).
            <p>
If it tries to set the millisecond bigger than 999 or smaller than 0, it will be calculated automatically.
For example, if ms is 1000, it will set 0 and add to a second.
            </p>
           
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMilliseconds = function(ms){ return; };

/**
 * Gets the minutes, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes, according to universal time (from 0-59).
            <p>
If it tries to set the minute bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if minutes is 60, it will set 0 and add to an hour.
            </p>
           
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMinutes = function(minutes){ return; };

/**
 * Gets the month, according to universal time (from 0-11).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month, according to universal time (from 0-11).
            <p>
If it tries to set the month bigger than 11 or smaller than 0, it will be calculated automatically.
For example, if month is 12, it will set 0 and add to a year.
            </p>
           
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMonth = function(month){ return; };

/**
 * Gets the seconds, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds, according to universal time (from 0-59).
            <p>
If it tries to set the second bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if seconds is 60, it will set 0 and add to a minute.
            </p>
           
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCSeconds = function(seconds){ return; };

/**
 * Gets the timezone identifier.
            <p>
Zero or more slashes separate different components, with the most general
descriptor first and the most specific one last. For example,
'Europe/Berlin', 'America/Argentina/Buenos_Aires'.
            </p>
            <p>
This attribute uniquely identifies the timezone.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezone = function(){ var ret = new String(); return ret; };

/**
 * Gets a copy of the TZDate converted to a given time zone.
 *
 * @param {String} tzid
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toTimezone = function(tzid){ var ret = new TZDate(); return ret; };

/**
 * Gets a copy of the TZDate converted to the local time zone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toLocalTimezone = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets a copy of the TZDate converted to Coordinated Universal Time (UTC).
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toUTC = function(){ var ret = new TZDate(); return ret; };

/**
 * Calculates the difference with another TZDate object.
            <p>
Calculates the difference in time between <em>this</em> and the other object.
This comparison method takes timezones into consideration for the comparison.
            </p>
            <p>
The TimeDuration that is returned is effectively <em>this</em> - other.
The return value is a duration in milliseconds both TZDate objects have a time component, in days, otherwise.
The result value will be:
            </p>
            <ul>
              <li>
Negative, if other is in the future              </li>
              <li>
0 if the two date/times are equal              </li>
              <li>
Positive, if other is in the past              </li>
            </ul>
           
 *
 * @param {TZDate} other
 * @type TimeDuration
 * @memberOf TZDate
 * @returns {TimeDuration}
 */
TZDate.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks whether the TZDate is equal to another.
            <p>
This method takes the timezones into consideration and will return <em>true</em>if the two TZDate objects represent the same instant in different timezones.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TZDate is earlier than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.earlierThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TZDate is later than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.laterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Gets a new date by adding a duration to the current TZDate object.
            <p>
If the length of duration is negative, the new date/time will be
earlier than it used to.
            </p>
            <p>
Note that calling this method does not alter the current object.
            </p>
           
 *
 * @param {TimeDuration} duration
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.addDuration = function(duration){ var ret = new TZDate(); return ret; };

/**
 * Gets the date portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleDateString = function(){ var ret = new String(); return ret; };

/**
 * Gets the time portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleString = function(){ var ret = new String(); return ret; };

/**
 * Gets the date portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toDateString = function(){ var ret = new String(); return ret; };

/**
 * Gets the time portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toString = function(){ var ret = new String(); return ret; };

/**
 * Determines the time zone abbreviation to be used at a particular date in the time zone.
            <p>
For example, in Toronto this is currently "EST" during the winter months and "EDT" during the
summer months when daylight savings time is in effect.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezoneAbbreviation = function(){ var ret = new String(); return ret; };

/**
 * Gets the number of seconds from Coordinated Universal Time (UTC) offset for the timezone.
            <p>
Returns the offset (in seconds) from UTC of the timezone, accounting for daylight
savings if it is in the timezone. For example, if time zone is GMT+8, it will return -32,400.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.secondsFromUTC = function(){ var ret = new Number(); return ret; };

/**
 * Checks whether Daylight Saving Time(DST) is active for this TZDate.
            <p>
Indicates if daylight savings are in effect for the time zone and instant
identified by the TZDate object.
            </p>
           
 *
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.isDST = function(){ var ret = new Boolean(); return ret; };

/**
 * Gets the date of the previous daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getPreviousDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets the date of the next daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getNextDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * The duration length.
 * <p>
The unit of the duration length (milliseconds, seconds, minutes, hours, or days)
is determined by the duration unit attribute.
            </p>
 *
 * @type Number
 */
TimeDuration.prototype.length = new Number();

/**
 * The duration unit (milliseconds, seconds, minutes, hours, or days).
 * <p>
The default value is "MSECS" (milliseconds unit).
            </p>
 *
 * @type TimeDurationUnit
 */
TimeDuration.prototype.unit = new TimeDurationUnit();

/**
 * Calculates the difference between two TimeDuration objects.
            <p>
Calculates the difference in time between <em>this</em> and <em>other</em>.
The TimeDuration that is returned is effectively <em>first</em> - <em>other</em> (that is: positive if the first parameter is larger).
            </p>
            <p>
The returned TimeDuration is the biggest possible unit without losing the precision.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type TimeDuration
 * @memberOf TimeDuration
 * @returns {TimeDuration}
 */
TimeDuration.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks whether the TimeDuration is equal to another.
            <p>
This method takes the units into consideration and will return true
if the two TimeDuration objects represent the same duration in different units.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TimeDuration is lower than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.lessThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TimeDuration is greater than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.greaterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * The Time API provides information regarding date/time and time zones.
 * <p>
The JavaScript Date object does not have full timezone support.
Date objects allow only simple representations to denote a particular location's
offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
that a location is 5 hours and 30 minutes ahead of UTC +00:00.
The issue with this method is not getting the correct
local time for a given date. The existing methods are sufficient for this purpose.
The issue is correctly converting to and from local time and UTC for all points in
time - in any of the past, present, and future - based on an initial time provided.
This is important for defining relative dates, where a time in a given location may
observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
or any other changes that may occur to a location's time zone over time.
Without the communication of the explicit time zone rules governing a given date and
time, the ability to effectively calculate the offset of the local time to UTC or to
any other time zone at any point in the past or future is lost.
        </p>
 * <p>
This API can be used to get TZDate objects with full time zone support, convert them
between timezones, retrieve available timezones.
        </p>
 * <p>
For more information on the Time features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/time.htm">Time Guide</a>.
        </p>
 *
 * @type TimeUtil
 */
Tizen.prototype.time = new TimeUtil();

/**
 * represents a set of filters.
          <p>
The composite filters can be one of the following 2 types:
          </p>
          <ul>
            <li>
The union - used to filter objects that match any of the filters it includes.            </li>
            <li>
The intersection - used to filter objects that match all the filters it includes.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {CompositeFilter}
 */
function CompositeFilter() {};
CompositeFilter.prototype = new AbstractFilter();

/**
 * This interface is used in methods that require only an error as an input parameter in the error callback.
          <p>
If an invalid function (such as null) is passed to the API that accepts ErrorCallback,
it silently fails and there is no further action.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * Generic exception interface.
          <p>
This interface will be used by the APIs to throw errors synchronously.
          </p>
          <p>
The attempt to set an attribute value may or may not raise WebAPIException synchronously with error type TypeMismatchError or InvalidValuesError.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIException}
 */
function WebAPIException() {};
WebAPIException.prototype = new Object();

/**
 * represents a filter based on an object attribute which has values that are within a particular range.
          <p>
Range filters, where only one boundary is set, are available.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeRangeFilter}
 */
function AttributeRangeFilter() {};
AttributeRangeFilter.prototype = new AbstractFilter();

/**
 * represents a point (latitude and longitude) in the map coordinate system.
          <p>
Latitude and longitude are of the WGS84 datum.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SimpleCoordinates}
 */
function SimpleCoordinates() {};
SimpleCoordinates.prototype = new Object();

/**
 * This interface represents a set of filters.
          <p>
It represents the query statement for the specified value of <em>matchValue</em> by the rule of <em>matchFlag</em>.
          </p>
          <p>
If no <em>matchValue</em> is defined, the filter matches all objects that have the attribute
defined (same as the "EXISTS" filter works), otherwise, it only matches objects which have an attribute that match
the specified value.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeFilter}
 */
function AttributeFilter() {};
AttributeFilter.prototype = new AbstractFilter();

/**
 * Generic error interface.
          <p>
This interface will be used by the APIs in order to return them in the error callback of asynchronous methods.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIError}
 */
function WebAPIError() {};
WebAPIError.prototype = new Object();

/**
 * This interface is used in methods that do not require any return value in the success callback.
          <p>
In case of successful execution of an asynchronous call, <em>SuccessCallback</em> or an API defined callback must be called immediately to notify the user.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SuccessCallback}
 */
function SuccessCallback() {};
SuccessCallback.prototype = new Object();

/**
 * Defines the tizen interface as a part of the window global object.
          <p>
The <em>Tizen</em> interface is always available within the <em>Window </em>object in the ECMAScript hierarchy.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TizenObject}
 */
function TizenObject() {};
TizenObject.prototype = new Object();

/**
 * The root of the Tizen Web Device API.
          <p>
This is the Tizen root interface.
It is a property of the ECMAScript global object, as specified by the <em>TizenObject</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Tizen}
 */
function Tizen() {};
Tizen.prototype = new Object();

/**
 * This is a common interface used by different types of object filters.
          <p>
Never use this base interface directly, instead use <em>AbstractFilter</em> subtypes,
such as <em>AttributeFilter</em>, <em>AttributeRangeFilter</em>, and <em>CompositeFilter</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AbstractFilter}
 */
function AbstractFilter() {};
AbstractFilter.prototype = new Object();

/**
 * is a common interface used for sorting of queried data.
          <p>
Note that the sorting result of list type attributes is not determined.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SortMode}
 */
function SortMode() {};
SortMode.prototype = new Object();

/**
 * The composite filter type.
 *
 * @type CompositeFilterType
 */
CompositeFilter.prototype.type = new CompositeFilterType();

/**
 * The list of filters in the composite filter.
 *
 * @type array
 */
CompositeFilter.prototype.filters = new array();

/**
 * Method that is invoked when an error occurs.
 *
 * @param {WebAPIError} error
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.onerror = function(error){ return; };

/**
 * The index is not in the allowed range.
 *
 * @type Number
 */
WebAPIException.INDEX_SIZE_ERR = new Number();

/**
 * The specified range of text is too large.
 *
 * @type Number
 */
WebAPIException.DOMSTRING_SIZE_ERR = new Number();

/**
 * The operation would yield an incorrect node tree.
 *
 * @type Number
 */
WebAPIException.HIERARCHY_REQUEST_ERR = new Number();

/**
 * The object is in the wrong document.
 *
 * @type Number
 */
WebAPIException.WRONG_DOCUMENT_ERR = new Number();

/**
 * The string contains invalid characters.
 *
 * @type Number
 */
WebAPIException.INVALID_CHARACTER_ERR = new Number();

/**
 * Data is specified for a node that does not support data.
 *
 * @type Number
 */
WebAPIException.NO_DATA_ALLOWED_ERR = new Number();

/**
 * The object cannot be modified.
 *
 * @type Number
 */
WebAPIException.NO_MODIFICATION_ALLOWED_ERR = new Number();

/**
 * The object cannot be found here.
 *
 * @type Number
 */
WebAPIException.NOT_FOUND_ERR = new Number();

/**
 * The operation is not supported.
 *
 * @type Number
 */
WebAPIException.NOT_SUPPORTED_ERR = new Number();

/**
 * The specified attribute is already in use elsewhere.
 *
 * @type Number
 */
WebAPIException.INUSE_ATTRIBUTE_ERR = new Number();

/**
 * The object is in an invalid state.
 *
 * @type Number
 */
WebAPIException.INVALID_STATE_ERR = new Number();

/**
 * The string did not match the expected pattern.
 *
 * @type Number
 */
WebAPIException.SYNTAX_ERR = new Number();

/**
 * The object cannot be modified in this way.
 *
 * @type Number
 */
WebAPIException.INVALID_MODIFICATION_ERR = new Number();

/**
 * The operation is not allowed by Namespaces in XML.
 *
 * @type Number
 */
WebAPIException.NAMESPACE_ERR = new Number();

/**
 * The object does not support the operation or argument.
 *
 * @type Number
 */
WebAPIException.INVALID_ACCESS_ERR = new Number();

/**
 * The operation would cause the node to fail validation.
 *
 * @type Number
 */
WebAPIException.VALIDATION_ERR = new Number();

/**
 * The type of the object does not match the expected type.
 *
 * @type Number
 */
WebAPIException.TYPE_MISMATCH_ERR = new Number();

/**
 * The operation is insecure.
 *
 * @type Number
 */
WebAPIException.SECURITY_ERR = new Number();

/**
 * A network error occurred.
 *
 * @type Number
 */
WebAPIException.NETWORK_ERR = new Number();

/**
 * The operation has been aborted.
 *
 * @type Number
 */
WebAPIException.ABORT_ERR = new Number();

/**
 * The given URL does not match another URL.
 *
 * @type Number
 */
WebAPIException.URL_MISMATCH_ERR = new Number();

/**
 * The quota has been exceeded.
 *
 * @type Number
 */
WebAPIException.QUOTA_EXCEEDED_ERR = new Number();

/**
 * The operation has timed out.
 *
 * @type Number
 */
WebAPIException.TIMEOUT_ERR = new Number();

/**
 * The supplied node is incorrect or has an incorrect ancestor for this operation.
 *
 * @type Number
 */
WebAPIException.INVALID_NODE_TYPE_ERR = new Number();

/**
 * The object cannot be cloned.
 *
 * @type Number
 */
WebAPIException.DATA_CLONE_ERR = new Number();

/**
 * 16-bit error code.
 * <p>
For the possible values of this attribute, see <a href="http://www.w3.ohttp://127.0.0.1:64149/help/topic/dom/#domexception">DOMException</a>.
            </p>
 *
 * @type Number
 */
WebAPIException.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it had been initialized with.
 * <p>
This attribute can have one of the following values: 
            </p>
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * </ul>
 * <p>
For other possible values of this attribute, see the values defined in <a href="http://www.w3.ohttp://127.0.0.1:64149/help/topic/dom/#error-names-0">DOM error names</a>            </p>
 *
 * @type String
 */
WebAPIException.prototype.name = new String();

/**
 * An error message that describes the details of an encountered error.
 * <p>
This attribute is mainly intended to be used for developers rather than end users, so it should not be used directly in the user interfaces as it is.
            </p>
 *
 * @type String
 */
WebAPIException.prototype.message = new String();

/**
 * The name of the object attribute used for filtering.
 * <p>
The value of this attribute is exactly as it is defined in the object's interface. For attributes of complex type, use fully-qualified names
(such as 'geolocation.latitude' to filter a video or image content's latitude in a geolocation).
            </p>
 * <p>
For attributes of array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeRangeFilter.prototype.attributeName = new String();

/**
 * Objects with an attribute that is greater than or equal to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.initialValue = new any();

/**
 * Objects with an attribute that is strictly lower than or equal to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.endValue = new any();

/**
 * Latitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.latitude = new Number();

/**
 * Longitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.longitude = new Number();

/**
 * The name of the object attribute used for filtering.
 * <p>
This is the name of the object attribute exactly as it is defined in
the object's interface. For attributes of complex type, use fully-qualified names
(such as 'geolocation.latitude' to filter a video or image content's latitude in a geolocation).
            </p>
 * <p>
For attributes of an array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeFilter.prototype.attributeName = new String();

/**
 * The match flag used for attribute-based filtering.
 * <p>
By default, this attribute is set to "EXACTLY".
            </p>
 *
 * @type FilterMatchFlag
 */
AttributeFilter.prototype.matchFlag = new FilterMatchFlag();

/**
 * The value used for matching.
 * <p>
The filter will match if the attribute value matches the given matchValue.
            </p>
 * <p>
This value is not used if the <em>matchFlag</em> is set to "EXISTS".
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeFilter.prototype.matchValue = new any();

/**
 * 16-bit error code.
 * <p>
Possible values are defined in <a href="http://www.w3.ohttp://127.0.0.1:64149/help/topic/dom/#domexception">DOMException</a>.
            </p>
 *
 * @type Number
 */
WebAPIError.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it had been initialized with.
 * <p>
This attribute can have one of the following values: 
            </p>
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * </ul>
 * <p>
For other possible values of this attribute, see the values defined in <a href="http://www.w3.ohttp://127.0.0.1:64149/help/topic/dom/#error-names-0">DOM error names</a>            </p>
 *
 * @type String
 */
WebAPIError.prototype.name = new String();

/**
 * An error message that describes the details of the error encountered.
 * <p>
This attribute is not intended to be used directly in the user interfaces
as it is mainly intended to be useful for developers rather than end users.
            </p>
 *
 * @type String
 */
WebAPIError.prototype.message = new String();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @type void
 * @memberOf SuccessCallback
 * @returns {void}
 */
SuccessCallback.prototype.onsuccess = function(){ return; };

/**
 * This API provides common Tizen functionality.
 * <p>
The API provides the basic definitions that are used in the Tizen Web Device API.
These include generic callbacks that are invoked when the operations succeed or fail,
WebAPIError and WebAPIException that give information of the platform's error and
filter interfaces that are used to make query statements for searching.
        </p>
 * <p>
Additionally, this API specifies the location in the ECMAScript hierarchy in which
the Tizen Web Device API is instantiated (<em>window.tizen</em>).
        </p>
 * <p>
For more information on the Tizen features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/tizen_guide/tizen.htm">Tizen Guide</a>.  
        </p>
 *
 * @type Tizen
 */
TizenObject.prototype.tizen = new Tizen();

/**
 * The name of the object attribute used for sorting.
 *
 * @type String
 */
SortMode.prototype.attributeName = new String();

/**
 * The type of the sorting.
 * <p>
By default, this attribute is set to <var>ASC</var>.
            </p>
 *
 * @type SortModeOrder
 */
SortMode.prototype.order = new SortModeOrder();

/**
 * This API provides common Tizen functionality.
 * <p>
The API provides the basic definitions that are used in the Tizen Web Device API.
These include generic callbacks that are invoked when the operations succeed or fail,
WebAPIError and WebAPIException that give information of the platform's error and
filter interfaces that are used to make query statements for searching.
        </p>
 * <p>
Additionally, this API specifies the location in the ECMAScript hierarchy in which
the Tizen Web Device API is instantiated (<em>window.tizen</em>).
        </p>
 * <p>
For more information on the Tizen features, see <a href="http://127.0.0.1:64149/help/topic/org.tizen.wearable.web.appprogramming/html/guide/tizen_guide/tizen.htm">Tizen Guide</a>.  
        </p>
 *
 * @type Tizen
 */
Window.prototype.tizen = new Tizen();

