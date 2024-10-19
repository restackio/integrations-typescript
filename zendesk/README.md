# Zendesk for Restack

This package provides an integration for Zendesk with Restack, allowing:

- the [creation of tickets](https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/)

## Installation

To install the package, use npm or yarn:

```bash
npm install @restackio/integrations-zendesk
```

## Configuration

Before using the Zendesk integration you need to set up your [API token](https://developer.zendesk.com/api-reference/introduction/security-and-auth/#api-token). You can do this by setting an environment variable or passing it directly to the functions.

1. Set up environment variables:

```bash
ZENDESK_SUBDOMAIN=your_zendesk_subdomain
ZENDESK_TOKEN=your_zendesk_token
ZENDESK_USERNAME=your_zendesk_username
```

2. Or pass them directly when calling the functions (see Usage section).

## Usage

### Starting the Zendesk Service

To start the Zendesk service, use the `zendeskService` function:

```typescript
import Restack from "@restackio/ai";
import { zendeskService } from "@restackio/integrations-zendesk";

const client = new Restack();

zendeskService({ client }).catch((err) => {
  console.error("Error starting Zendesk service:", err);
});
```

### Using the Zendesk Create Ticket Function

This function allows for the [creation of tickets](https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/).

#### Properties

| Name | Type | Description |
--- | --- | ---
assignee_email? | string | Write only. The email address of the agent to assign the ticket to
assignee_id? | number | The agent currently assigned to the ticket
attribute_value_ids? | number[] | Write only. An array of the IDs of attribute values to be associated with the ticket
brand_id? | number | Enterprise only. The id of the brand this ticket is associated with. See [Setting up multiple brands](https://support.zendesk.com/hc/en-us/articles/4408829476378).
collaborator_ids? | number[] | The ids of users currently CC'ed on the ticket
comment? | TicketComment | Write only. An object that adds a comment to the ticket. See [Ticket comments](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/).
custom_fields? | CustomField[] | Custom fields for the ticket. See [Setting custom field values](https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-custom-field-values).
custom_status_id? | number | The custom ticket status id of the ticket. See [custom ticket statuses](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#custom-ticket-statuses).
due_at? | string | If this is a ticket of type "task" it has a due date. Due date format uses [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
email_ccs? | object | Write only. An array of objects that represent agent or end users email CCs to add or delete from the ticket. See [Setting email CCs](https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#setting-email-ccs).
external_id? | string | An id you can use to link Zendesk Support tickets to local records
followers? | object | Write only. An array of objects that represent agent followers to add or delete from the ticket. See [Setting followers](https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#setting-followers).
group_id? | number | The group this ticket is assigned to
macro_id? | number | Write only. A macro ID to be recorded in the ticket audit
organization_id? | number | The organization of the requester. You can only specify the ID of an organization associated with the requester. See [Organization Memberships](https://developer.zendesk.com/api-reference/ticketing/organizations/organization_memberships/).
priority? | Priority | The urgency with which the ticket should be addressed. Allowed values are "urgent", "high", "normal", or "low".
problem_id? | number | For tickets of type "incident", the ID of the problem the incident is linked to
recipient? | string | The original recipient e-mail address of the ticket. Notification emails for the ticket are sent from this address
requester? | object | Write only. See [Creating a ticket with a new requester](https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#creating-a-ticket-with-a-new-requester).
requester_id | number | The user who requested this ticket
safe_update? | boolean | Write only. Optional boolean. When true and an `update_stamp` date is included, protects against ticket update collisions and returns a message to let you know if one occurs. See [Protecting against ticket update collisions](https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#protecting-against-ticket-update-collisions). A value of false has the same effect as true. Omit the property to force the updates to not be safe
sharing_agreement_ids? | number[] | The ids of the sharing agreements used for this ticket
status? | Status | The state of the ticket. If your account has activated custom ticket statuses, this is the ticket's status category. See [custom ticket statuses](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#custom-ticket-statuses). Allowed values are "new", "open", "pending", "hold", "solved", or "closed".
subject? | string | The value of the subject field for this ticket. See [Subject](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#subject.)
submitter_id? | number | The user who submitted the ticket. The submitter always becomes the author of the first comment on the ticket
tags? | string[] | The array of tags applied to this ticket.
ticket_form_id? | number | Enterprise only. The id of the ticket form to render for the ticket
type? | Type | The type of this ticket. Editable for custom field types and only on creation. See [Create Ticket Field](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/#create-ticket-field). Allowed values are "problem", "incident", "question", or "task".
updated_stamp? | string | Write only. Datetime of last update received from API. See the `safe_update` property
via? | object | For more information, see the [Via object reference](https://developer.zendesk.com/documentation/ticketing/reference-guides/via-object-reference).
via_id? | number | Write only. For more information, see the [Via object reference](https://developer.zendesk.com/documentation/ticketing/reference-guides/via-object-reference/).

#### Code Example

```typescript
import { createTicket } from "@restackio/integrations-zendesk/functions";
import type { CreateTicket, CustomField, Priority, Status, TicketComment, Type, Via } from "@restackio/integrations-zendesk/functions";

const result = await createTicket({
  comment, // required
  requester_id, // required
  subdomain, // optional if set in environment variables
  token, // optional if set in environment variables
  username, // optional if set in environment variables
  ...
});

console.log(result);
```
