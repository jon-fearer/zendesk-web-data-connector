(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
      var ticketCols = [
        { id : 'Url', alias : 'Url', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'Id', alias : 'Id', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'ExternalId', alias : 'ExternalId', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'Rel', alias : 'Rel', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string},
        { id : 'CreatedAt', alias : 'CreatedAt', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.datetime },
        { id : 'UpdatedAt', alias : 'UpdatedAt', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.datetime },
        { id : 'Type', alias : 'Type', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'Subject', alias : 'Subject', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'Description', alias : 'Description', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'Priority', alias : 'Priority', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'Status', alias : 'Status', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'Recipient', alias : 'Recipient', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'RequesterId', alias : 'RequesterId', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'SubmitterId', alias : 'SubmitterId', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'AssigneeId', alias : 'AssigneeId', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'OrganizationId', alias : 'OrganizationId', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'GroupId', alias : 'GroupId', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'ForumTopicId', alias : 'ForumTopicId', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'ProblemId', alias : 'ProblemId', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'HasIncidents', alias : 'HasIncidents', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'IsPublic', alias : 'IsPublic', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'DueAt', alias : 'DueAt', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.datetime },
        { id : 'Tags', alias : 'Tags', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'Resolution', alias : 'Resolution', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'Category', alias : 'Category', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'Five9CallId', alias : 'Five9CallId', columnRole : 'Dimension', dataType : tableau.dataTypeEnum.int }
      ];

      var ticketTable = {
        id : 'TicketTable',
        alias : 'TicketTable',
        columns : ticketCols
      };

      var ticketMetricCols = [
        { id : 'Id', alias : 'Id', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'TicketId', alias : 'TicketId', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'Url', alias : 'Url', columnRole : 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'GroupStations', alias : 'GroupStations', columnRole : 'Measure', dataType : tableau.dataTypeEnum.int },
        { id : 'AssigneeStations', alias : 'AssigneeStations', columnRole : 'Measure', dataType : tableau.dataTypeEnum.int },
        { id : 'Reopens', alias : 'Reopens', columnRole : 'Measure', dataType : tableau.dataTypeEnum.int },
        { id : 'Replies', alias : 'Replies', columnRole : 'Measure', dataType : tableau.dataTypeEnum.int },
        { id : 'AssigneeUpdatedAt', alias : 'AssigneeUpdatedAt',columnRole: 'Dimension', dataType : tableau.dataTypeEnum.datetime },
        { id : 'RequesterUpdatedAt', alias : 'RequesterUpdatedAt',columnRole: 'Dimension', dataType : tableau.dataTypeEnum.datetime },
        { id : 'StatusUpdatedAt', alias : 'StatusUpdatedAt',columnRole: 'Dimension', dataType : tableau.dataTypeEnum.datetime },
        { id : 'InitiallyAssignedAt', alias : 'InitiallyAssignedAt',columnRole: 'Dimension', dataType : tableau.dataTypeEnum.datetime },
        { id : 'AssignedAt', alias : 'AssignedAt',columnRole: 'Dimension', dataType : tableau.dataTypeEnum.datetime },
        { id : 'SolvedAt', alias : 'SolvedAt', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.datetime },
        { id : 'LatestCommentAddedAt', alias : 'LatestCommentAddedAt', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.datetime },
        { id : 'FirstResolutionTimeMinutes', alias : 'FirstResolutionTimeMinutes', dataType : tableau.dataTypeEnum.int },
        { id : 'ReplyTimeMinutes', alias : 'ReplyTimeMinutes', columnRole : 'Measure', dataType : tableau.dataTypeEnum.int },
        { id : 'FullResolutionTimeMinutes', alias : 'FullResolutionTimeMinutes', columnRole : 'Measure', dataType : tableau.dataTypeEnum.int },
        { id : 'AgentWaitTimeMinutes', alias : 'AgentWaitTimeMinutes', columnRole : 'Measure', dataType : tableau.dataTypeEnum.int },
        { id : 'RequesterWaitTimeMinutes', alias : 'RequesterWaitTimeMinutes', columnRole : 'Measure', dataType : tableau.dataTypeEnum.int },
        { id : 'OnHoldTimeMinutes', alias : 'OnHoldTimeMinutes', columnRole : 'Measure', dataType : tableau.dataTypeEnum.int },
        { id : 'CreatedAt', alias : 'CreatedAt', columnRole: 'dimension', dataType : tableau.dataTypeEnum.datetime },
        { id : 'UpdatedAt', alias : 'UpdatedAt', columnRole: 'dimension', dataType : tableau.dataTypeEnum.datetime }
      ];

      var ticketMetricsTable = {
        id : 'TicketMetricsTable',
        alias : 'TicketMetricsTable',
        columns : ticketMetricCols
      };

      var organizationCols = [
        { id : 'Id', alias : 'Id', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int },
        { id : 'Name', alias : 'Name', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.string },
        { id : 'PracticeId', alias : 'PracticeId', columnRole: 'Dimension', dataType : tableau.dataTypeEnum.int }
      ];

      var organizationTable = {
        id : 'OrganizationTable',
        alias : 'OrganizationTable',
        columns: organizationCols
      };

      schemaCallback([ticketTable, ticketMetricsTable, organizationTable]);
    };

    myConnector.getData = function (table, doneCallback) {

      var token = JSON.parse(tableau.connectionData);
      var output = [];
      var tableData = [];

      function makeTicketRequest(token, apiurl) {
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                      var resp = JSON.parse(request.responseText).tickets;
                      Array.prototype.push.apply(output,resp);
                      apiurl = JSON.parse(request.responseText).next_page;

                      if (output.length >= 20000){
                        for (var i = 0, len = output.length; i < len; i++) {
                            var fields = {
                                'Url': output[i].url,
                                'Id': output[i].id,
                                'ExternalId': output[i].external_id,
                                'Rel': output[i].via.source.rel,
                                'CreatedAt': output[i].created_at,
                                'UpdatedAt': output[i].updated_at,
                                'Type': output[i].type,
                                'Subject': output[i].subject,
                                'Description': output[i].description,
                                'Priority': output[i].priority,
                                'Status': output[i].status,
                                'Recipient': output[i].recipient,
                                'RequesterId': output[i].requester_id,
                                'SubmitterId': output[i].submitter_id,
                                'AssigneeId': output[i].assignee_id,
                                'OrganizationId': output[i].organization_id,
                                'GroupId': output[i].group_id,
                                'ForumTopicId': output[i].forum_topic_id,
                                'ProblemId': output[i].problem_id,
                                'HasIncidents': output[i].has_incidents,
                                'IsPublic': output[i].is_public,
                                'DueAt': output[i].due_at
                            };

                            var taglist = '';
                            var j = 0;
                            while (output[i].tags[j]) {
                                taglist += output[i].tags[j]+', ';
                                j += 1;
                            };
                            taglist.replace(/, $/,'');
                            var alltags = {'Tags' : taglist};
                            $.extend(fields,alltags);

                            var customfields = {};
                            for (var k = 0, lencust = output[i].custom_fields.length; k < lencust; k++) {
                              if (output[i].custom_fields[k].id == 24788203) {
                                customfields['Resolution'] = output[i].custom_fields[k].value;
                              } else if (output[i].custom_fields[k].id == 24847226) {
                                customfields['Category'] = output[i].custom_fields[k].value;
                              } else if (output[i].custom_fields[k].id == 25429486) {
                                customfields['Five9CallId'] = output[i].custom_fields[k].value;
                              };
                            };
                            $.extend(fields,customfields);
                            tableData.push(fields);
                        };
                        table.appendRows(tableData);
                        doneCallback();
                      } else {
                        makeTicketRequest(token, apiurl);
                      }
                    } else {
                      alert('not a 200 response');
                    }
                }
        };


        request.open('GET', apiurl, true);
        request.setRequestHeader('Authorization', 'Bearer ' + token);
        request.send();

      };

      function makeTicketMetricRequest(token,apiurl) {
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                      var resp = JSON.parse(request.responseText).ticket_metrics;
                      Array.prototype.push.apply(output,resp);
                      apiurl = JSON.parse(request.responseText).next_page;

                      if (output.length >= 20000){
                        for (var i = 0, len = output.length; i < len; i++) {
                          tableData.push({
                            'Id' : output[i].id,
                            'TicketId' : output[i].ticket_id,
                            'Url' : output[i].url,
                            'GroupStations' : output[i].group_stations,
                            'AssigneeStations' : output[i].assignee_stations,
                            'Reopens' : output[i].reopens,
                            'Replies' : output[i].replies,
                            'AssigneeUpdatedAt' : output[i].assignee_updated_at,
                            'RequesterUpdatedAt' : output[i].requester_updated_at,
                            'StatusUpdatedAt' : output[i].status_updated_at,
                            'InitiallyAssignedAt' : output[i].initially_assigned_at,
                            'AssignedAt' : output[i].assigned_at,
                            'SolvedAt' : output[i].solved_at,
                            'LatestCommentAddedAt' : output[i].latest_comment_added_at,
                            'FirstResolutionTimeMinutes' : output[i].first_resolution_time_in_minutes.calendar,
                            'ReplyTimeMinutes' : output[i].reply_time_in_minutes.calendar,
                            'FullResolutionTimeMinutes' : output[i].full_resolution_time_in_minutes.calendar,
                            'AgentWaitTimeMinutes' : output[i].agent_wait_time_in_minutes.calendar,
                            'RequesterWaitTimeMinutes' : output[i].requester_wait_time_in_minutes.calendar,
                            'OnHoldTimeMinutes' : output[i].on_hold_time_in_minutes.calendar,
                            'CreatedAt' : output[i].created_at,
                            'UpdatedAt' : output[i].updated_at
                          });
                        }
                        table.appendRows(tableData);
                        doneCallback();
                      } else {
                        makeTicketMetricRequest(token,apiurl);
                      }
                    } else {
                      alert('not a 200 response');
                    }
                };
        };

        request.open('GET', apiurl, true);
        request.setRequestHeader('Authorization', 'Bearer ' + token);
        request.send();
      };

      function makeOrgRequest(token,apiurl) {
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                      var resp = JSON.parse(request.responseText).organizations;
                      Array.prototype.push.apply(output,resp);
                      apiurl = JSON.parse(request.responseText).next_page;
                      if (apiurl == null){
                        for (var i = 0, len = output.length; i < len; i++) {
                          tableData.push({
                            'Id' : output[i].id,
                            'Name' : output[i].name,
                            'PracticeId' : output[i].organization_fields.practice_id
                          });
                        }
                        table.appendRows(tableData);
                        doneCallback();
                      } else {
                        makeOrgRequest(token,apiurl);
                      }
                    } else {
                      alert('not a 200 response');
                    }
                };
        };

        request.open('GET', apiurl, true);
        request.setRequestHeader('Authorization', 'Bearer ' + token);
        request.send();
      };

      if (table.tableInfo.id == 'TicketTable') {
        var apiurl = 'https://abc.zendesk.com/api/v2/tickets.json?sort_by=created_at&sort_order=desc';
        makeTicketRequest(token,apiurl);
      } else if (table.tableInfo.id == 'TicketMetricsTable') {
        var apiurl = 'https://abc.zendesk.com/api/v2/ticket_metrics.json?sort_by=created_at&sort_order=desc';
        makeTicketMetricRequest(token,apiurl);
      } else if (table.tableInfo.id == 'OrganizationTable') {
        var apiurl = 'https://abc.zendesk.com/api/v2/organizations.json';
        makeOrgRequest(token,apiurl);
      };

    };

    tableau.registerConnector(myConnector);

    function readUrlParam(url, param) {
      param += '=';
      if (url.indexOf(param) !== -1) {
        var start = url.indexOf(param) + param.length;
        var value = url.substr(start);
        if (value.indexOf('&') !== -1) {
          var end = value.indexOf('&');
          value = value.substring(0, end);
        }
          return value;
        } else {
          return false;
        }
    };

    $(document).ready(function () {
      $('#connectButton').click(function () {
        //Redirect to authorization page
        function startAuthFlow() {
          var endpoint = 'https://abc.zendesk.com/oauth/authorizations/new';
          var url_params = '?' +
            'response_type=token' + '&' +
            'redirect_uri=http://127.0.0.1:3000/index.html' + '&' +
            'client_id=zendesk_web_data_connnector' + '&' +
            'scope=' + encodeURIComponent('read write');
          window.location = endpoint + url_params;
        };

        url = window.location.href;
        if (url.indexOf('http://127.0.0.1:3000/index.html') !== -1) {
          if (url.indexOf('access_token=') !== -1) {
            localStorage.setItem('zauth', readUrlParam(url, 'access_token'));
            console.log('Connected');
            if($('#successSpace').html().length == 0){
              $('#successSpace').append('You&apos;re connected!');
            };
          } else if (localStorage.getItem('zauth') != 'false' &&
                     localStorage.getItem('zauth') != null) {
            console.log('Connected');
            if($('#successSpace').html().length == 0){
              $('#successSpace').append('You&apos;re connected!');
            };
          } else {
            console.log('Taking you to auth page...');
            startAuthFlow();
          }
        };

      });

    $('#submitButton').click(function () {
      tableau.connectionName = 'Zendesk Tickets';

      if (localStorage.getItem('zauth') != 'false' &&
          localStorage.getItem('zauth') != null){
        var token = localStorage.getItem('zauth');
      } else if (readUrlParam(window.location.href, 'access_token')) {
        var token = readUrlParam(window.location.href, 'access_token');
        localStorage.setItem('zauth', readUrlParam(window.location.href, 'access_token'));
      };

      if (token) {
        tableau.connectionData = JSON.stringify(token);
        tableau.submit();
      } else {
        $(myModal).modal();
      };

    });
    });
})();
