---
id: version-0.55.2-pre-asf-user-guide-tour
title: Tour
sidebar_label: Tour
original_id: user-guide-tour
---

StreamPipes is a framework that enables domain experts to model and execute stream processing pipelines in a big data infrastructure.
The graphical user interface of StreamPipes is a web application that provides an easy to use solution for domain experts.
In this page, an overview of the many features of StreamPipes is given. We will tour through all features and explain what they do and how users can interact with them.

First of all, a user needs to log in to the system.
The credentials for the user are specified during the installation process.

![StreamPipes Login](/docs/img/features/login.png) 

## Home
After logging in, the user is redirected on to the home page.
The home page gives an overview over the different features available in the StreamPipes UI.

On the left, the navigation menu can be seen.
You can either use the icons on the left side or click on the menu icon on the
top left to open the details view of the navigation menu.

On the top right, a link refers to the documentation and the logout button is present.

<div class="my-carousel">
    <img src="/docs/img/features/home/home.png" alt="Home">
    <img src="/docs/img/features/home/menu.png" alt="Menu">
    <img src="/docs/img/features/home/open_menu.png" alt="Open Menu">
    <img src="/docs/img/features/home/logout.png" alt="Logout">
</div>



## Pipeline Editor
The first feature we are going to explain is the Pipeline Editor.
This is one of the central features of StreamPipes, since graphical modeling of pipelines takes place in this view.

On the top we can see three tabs: __Data Streams__, __Processing Elements__, and __Data Sinks__.
Each tab contains multiple pipeline elements, which can be installed at runtime.
The installation of pipeline elements is explained later in section [Install Pipeline Elements](user-guide-tour.md#install-pipeline-elements).

<div class="my-carousel">
    <img src="/docs/img/features/editor/1_data_streams.png" alt="Data Streams">
    <img src="/docs/img/features/editor/2_processing_elements.png" alt="Processing Elements">
    <img src="/docs/img/features/editor/3_data_sinks.png" alt="Data Sinks">
</div>

There are multiple ways to search for a pipeline element. 
The easiest way is to enter a search term in the search field on the top left corner.
The system filters the elements according to the search term and only presents the relevant ones.
Another way is to select one of the categories from the drop down menu.
The system then filters the elements according to the selected category.
The category of an element is defined by its functionality.

<div class="my-carousel">
    <img src="/docs/img/features/editor/4_text_filter.png" alt="Text Filter">
    <img src="/docs/img/features/editor/5_category_drop_down.png" alt="Category Drop Down">
    <img src="/docs/img/features/editor/6_category_filter.png" alt="Category Filter">
</div>

Modelling of a pipeline starts with choosing one ore more data sources. Therefore a data stream must be selected
and moved into the editor via drag and drop.
After adding a data stream, we can select a processing element to transform the events of the data stream.
This is done again by dragging the processing element icon into our editor.
The mouse can be used to connect the two elements.
It is automatically checked in the background if the two elements are semantically compatible.
If this check is successful, a configuration menu is shown. It contains the parameters that can be modified by the
user. For all parameters, a description is provided and the system also prevents the user from entering parameters that
are not correct, according to the semantic description of the element.
It is also ensured that all required parameters are provided by the user, otherwise an error message is displayed.


<div class="my-carousel">
    <img src="/docs/img/features/editor/7_connect_elements.png" alt="Connect Elements">
    <img src="/docs/img/features/editor/8_configure_element.png" alt="Configure Elements">
</div>

When the user tries to connect two elements that are not compatible, the system shows a __connection error__ message.
The example illustrated below shows such a case. The user tried to connect a text filter to a temperature sensor.
This is not possible since the text filter processing element requires at least one event property of type string, which is not provided by the temperature sensor.

![Connection Error](../img/features/editor/9_connection_error.png) 

To further improve the usability, multiple ways are available to connect new elements besides the drag and drop option.
Each processing element has multiple short-cut buttons to connect it with another element.
The first one can be used to get a suggestion of all elements that are compatible with the current element.
The second one gives a recommendation on the elements the user might want to connect, based on the usage of the component in
other pipelines.
There is also a button to open the documentation of a selected element.
Elements can be deleted by clicking the 'delete' button.
Each element can also be re-configured at a later point in time using the configuration button.
There is one important aspect about re-configuration of pipeline elements you need to be aware of: Only elements that are not yet connected to another element can be modified.
The reason for this behaviour is that some of the following elements might rely on the configuration of previous elements.
This way it is ensured that the user can not change the behaviour of the pipeline by accident.
 

<div class="my-carousel">
    <img src="/docs/img/features/editor/10_shortcut_buttons.png" alt="Shortcut Buttons">
    <img src="/docs/img/features/editor/11_compatible_elements.png" alt="Compatible Elements">
    <img src="/docs/img/features/editor/12_recommend_elements.png" alt="Recommended elements">
</div>


After the pipeline is completely modelled, the editor looks similar to the first image below.
Especially for larger pipelines, the auto layout button in the editor menu might be helpful.
With this button, the pipeline will be beautifully aligned in the editor, helping users to get a better overview of the complete pipeline.
On the top left corner of the editor, the 'save' button can be found.
After the modelling of the pipeline is done, use this button to save and execute the pipeline.
A save dialogue pops up when clicking the save button. 
The pipeline title must be entered and an additional description can be provided.
It is recommended to always provide a description, because it makes it easier for other users to understand the meaning of the pipeline.
In the save menu, the user can either just store the pipeline configuration or store it and immediately start the pipeline.
Once the pipeline is executed, the user is redirected to the _Manage Pipeline_ view.
In this view, the user gets immediate feedback whether all components did start correctly and the pipeline is up and running.
This view also shows that individual elements might run in different environments on different servers.
If there is an error during the execution, a notification containing a (hopefully) detailed error description is provided in this view.

<div class="my-carousel">
    <img src="/docs/img/features/editor/13_save_adjust.png" alt="Save adjust delete">
    <img src="/docs/img/features/editor/14_save_dialogue.png" alt="Complete pipeline">
    <img src="/docs/img/features/editor/15_pipeline_sucessfully_started.png" alt="Pipeline sucessfully started">
</div>


## Manage Pipelines
The _Manage Pipelines_ view provides an overview of all existing pipelines.
Existing pipelines can be managed using this view.
For instance, users can start and stop pipelines or delete them when they are not longer needed.
Pipeline actions can be performed by clicking one of the buttons next to each pipeline.
For each pipeline, the title and description is displayed in the table.
By clicking the edit button, they can also be inspected in more detail.

<div class="my-carousel">
    <img src="/docs/img/features/manage_pipelines/1_pipeline_overview.png" alt="Pipeline Overview">
    <img src="/docs/img/features/manage_pipelines/2_start_stop_pipeline.png" alt="Start stop Pipelines">
    <img src="/docs/img/features/manage_pipelines/3_delete_pipeline.png" alt="Delete Pipelines">
    <img src="/docs/img/features/manage_pipelines/4_pipeline_deleted.png" alt="Delete Pipelines">
</div>

In a setting with many defined pipelines, it can get really hard to keep track of all pipelines.
This is why we introduce categories.
A category is a set of pipelines that can be defined by users in order to better organize pipelines.
By clicking on the "Manage Categories" button on the top left, a new category can be added to StreamPipes.
In this example, we create a new category named "New Demo Category".
After saving a category, pipelines can be added to the newly created category.
The new category is then presented as a tab in the _Pipeline Management_ view.
This tab contains all previously defined pipelines.

<div class="my-carousel">
    <img src="/docs/img/features/manage_pipelines/5_pipeline_category.png" alt="Pipeline Category">
    <img src="/docs/img/features/manage_pipelines/6_add_category.png" alt="Add Pipeline Category">
    <img src="/docs/img/features/manage_pipelines/7_new_category.png" alt="New Category">
    <img src="/docs/img/features/manage_pipelines/8_show_new_category.png" alt="Show new Category">
</div>

## Live Dashboard
The live dashboard can be used for multiple use cases.
It is a good way to live monitor a running system in a dashboard, but it can also be used during the pipeline development to get a fast feedback from newly created pipelines.
Below is a screenshot of an example dashboard showing the current value of a water level, which further shows a line chart and a map.
All pipelines that contain the "Dashboard Sink" can be visualized in this view.
To add a new visualisation, click on the "Add visualisation" button on the top left corner.
Afterwards, a three-step configuration menu is shown.
The first step is to select the pipeline that should be visualized.
In the second step, the type of visualization can be defined.
Currently. 9 different types are available, including line charts, various map visualizations and data tables.
After selecting the type (in our example "Gauge"), you can select the specific measurement values of the data stream that should be displayed.
In the example below, the water level value should be monitored and the gauge value should range from 0 to 100.
Once all steps are completed, the new visualization is placed on the dashboard and live data is presented as soon as it becomes available.

<div class="my-carousel">
    <img src="/docs/img/features/dashboard/01_dashboard.png" alt="Screenshot of live dashboard">
    <img src="/docs/img/features/dashboard/06_add_new.png" alt="New Visualization">
    <img src="/docs/img/features/dashboard/02_new_visualisation.png" alt="Select Pipeline to visualize">
    <img src="/docs/img/features/dashboard/03_select_gauge.png" alt="Select Visualization Type">
    <img src="/docs/img/features/dashboard/04_configure_gauge.png" alt="Configure  Visualzation">
    <img src="/docs/img/features/dashboard/05_new_gauge_done.png" alt="Show new Visualzation">
</div>

## File Download
With the file download,  it is possible to download stored files directly from Elasticsearch.
This can be very useful for example when a data dumb is needed for a specific time range.
All data that is written into Elasticsearch using the _Elasticsearch Sink_ can be accessed by the file downloader.
A common use case is to download data for offline analysis and to train a machine learning algorithm.
First, an index must be defined, afterwards, the time range must be set.
A date picker helps users to enter the time range.
When a user clicks the "Create File" button the file is created.
All files stored on the server can be downloaded via the download button.
If the files are not longer needed, they can be deleted by clicking the delete button.
This will remove the file from the server.
Since data is stored in Elasticsearch anyways. it is recommended not to store the files for a longer period of time on the server.
When a file is needed again at a later point in time it is easy to create it again. 
This way a lot of disk space on the server can be saved, especially when the files are rather large.

<div class="my-carousel">
    <img src="/docs/img/features/file_download/01_file_download.png" alt="File Download">
    <img src="/docs/img/features/file_download/02_file_download.png" alt="File Download with selected time range">
    <img src="/docs/img/features/file_download/03_file_downloaded.png" alt="File Download with new File">
</div>

## Notifications
Notifications are a good solution to notify someone when a specific situation occurs.
A notification can be created by using the notification sink in the pipeline editor.
When using such a sink a configuration dialogue is presented to the user.
In this dialogue the user must provide enough information to resolve the solution when it occurs.
The message can be nicely configured in the message editor.
It is also possible to embed values of the event that triggered the notification.
This can be done with the #property# notation.
All available properties are presented in the notification configurator.
When the notification is triggered the #property# template is replaced with the actual value of the property.

<div class="my-carousel">
    <img src="/docs/img/features/notification/01_select_notification_sink.png" alt="Select Notification">
    <img src="/docs/img/features/notification/02_configure_notification.png" alt="Configure Notification">
    <img src="/docs/img/features/notification/03_use_event_properties.png" alt="Use Event Properties">
</div>

A pop up icon on the notification tab in the menu shows the user how many unread notifications currently are in the system.
This icon also alerts users when new notifications occur.
In the notification overview all notifications are listed.
On the top are the new notifications that are not read yet.
A user can mark them as read by clicking on the little envelope icon.
Those notifications are then no longer in the unread section, but they remain in the "All Messages" view.
This way it is possible to keep track of all notifications and have a look at them at a later point in time.

<div class="my-carousel">
    <img src="/docs/img/features/notification/04_new_notification.png" alt="New Notification">
    <img src="/docs/img/features/notification/05_mark_read.png" alt="Mark Notification as read">
    <img src="/docs/img/features/notification/06_marked_as_read.png" alt="Notification read">
</div>


## Install Pipeline Elements
StreamPipes is highly configurable and extensible.
Pipeline elements can be added and removed during runtime.
This can be done in the "Install Pipeline Elements" view.
All available pipeline elements are shown here and can be selected to install or uninstall.
It is also possible to select multiple or all of them and then install them all together.
When a new element is installed by the user it is automatically available in the "Pipeline Editor" and can be used for pipelines.
Elements that are uninstalled are removed from the system. 
They can not longer be used within pipelines.

<div class="my-carousel">
    <img src="/docs/img/features/install_elements/01_install_elements.png" alt="Install Elements View">
    <img src="/docs/img/features/install_elements/02_install_absence.png" alt="Insall new Element">
    <img src="/docs/img/features/install_elements/03_installed_absence.png" alt="Installation Successful">
    <img src="/docs/img/features/install_elements/04_abcense_in_editor.png" alt="Show new installed element">
</div>


## My Elements
The "My Elements" view gives a quick overview over all installed pipeline elements.
Here they can be inspected and the description can be re-imported.
In this view it is also possible to have a look at the JSON-LD representation of each element.
This is not important for a user, but it is worth noting that the system uses this machine understandable format to support the user.
For example all the information of the sources, like data schema or unit information is in the JSON-LD meta data.

<div class="my-carousel">
    <img src="/docs/img/features/my_elements/01_my_elements.png" alt="My Elements Overview">
    <img src="/docs/img/features/my_elements/02_my_elements_jsonls.png" alt="View JSON-LD">
    <img src="/docs/img/features/my_elements/03_jsonld.png" alt="See JSON-LD">
</div>

## Configuration
The last feature is the _configuration view_.
Here, it is possible to change the configuration parameters of installed components.
All components containing processing elements automatically register in StreamPipes when they are started in the same network as the backend component.
Once a container is registered it is represented in the configuration view.
The green dot on the top left indicates that tha container is running properly.
When there is a problem with a container the green dot changes to red and the user knows there is a problem.
To configure the parameters the top right arrow of a configuration box must be clicked.
Then the configuration menu pops up. 
Within there it is possible to change the parameters of a service.
To make the changes persistent the "Update" button must be clicked.
A user should keep in mind that sometimes it is necessary to restart a container when the parameters are changed.
Sometimes it is also necessary to re-import the pipeline element description, either by uninstalling and re-installing them after the container restart or be reloading the description in the "My elements" view.

<div class="my-carousel">
    <img src="/docs/img/features/configuration/01_configuration_overview.png" alt="Configuration Overview">
    <img src="/docs/img/features/configuration/02_status.png" alt="Status of Processing Element Containers">
    <img src="/docs/img/features/configuration/03_change_config.png" alt="Change Configuration">
</div>


Congratulations! You've just finished your first tour of StreamPipes.
Although there's still more to learn, we introduced most of the currently available features.
On the next page, the different processing elements that come with the installation are explained.