import { log } from "@restackio/ai/function";
import { Ticket } from "node-zendesk/clients/core/tickets";
import type { CreateOrUpdateTicket, CustomField, Priority, Status, TicketComment, Type } from "node-zendesk/clients/core/tickets"
import { zendeskClient } from "../utils/client";

export type { CreateOrUpdateTicket, CustomField, Priority, Status, TicketComment, Type } from "node-zendesk/clients/core/tickets"

// @see {@link https://developer.zendesk.com/documentation/ticketing/reference-guides/via-object-reference/}
export type Via = {
  channel: number | string;
  source: {
    from: {
      address: string;
      name: string;
    };
    rel: null | string;
    to: {
      address: string;
      name: string;
    };
  }
};

// @see {@link https://blakmatrix.github.io/node-zendesk/code/modules/clients_core_tickets.html#ticket}
export type CreateTicket = {
  assignee_email?: string;
  assignee_id?: number;
  attribute_value_ids?: Array<number>;
  brand_id?: number;
  collaborator_ids?: Array<number>;
  comment: TicketComment;
  custom_fields?: Array<CustomField>;
  custom_status_id?: number;
  due_at?: string;
  email_ccs?: object;
  external_id?: string;
  followers?: object;
  group_id?: number;
  macro_id?: number;
  organization_id?: number;
  priority?: Priority;
  problem_id?: number;
  recipient?: string;
  requester?: object;
  requester_id: number;
  safe_update?: boolean;
  sharing_agreement_ids?: Array<number>;
  status?: Status;
  subdomain?: string;
  subject?: string;
  submitter_id?: number;
  tags?: Array<string>;
  ticket_form_id?: number;
  token?: string;
  type?: Type;
  updated_stamp?: string;
  username?: string;
  via?: Via;
  via_id?: number;
};

/**
 * Create ticket
 *
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/}
 * @see {@link https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/}
 * @see {@link https://blakmatrix.github.io/node-zendesk/code/classes/clients_core_tickets.Tickets.html#create}
 * @see {@link https://blakmatrix.github.io/node-zendesk/code/modules/clients_core_tickets.html#ticket}
 */
export async function createTicket({
  assignee_email,
  assignee_id,
  attribute_value_ids,
  collaborator_ids,
  custom_fields,
  custom_status_id,
  brand_id,
  comment,
  due_at,
  email_ccs,
  external_id,
  followers,
  group_id,
  macro_id,
  organization_id,
  priority,
  problem_id,
  recipient,
  requester,
  requester_id,
  safe_update,
  sharing_agreement_ids,
  status,
  subdomain,
  subject,
  submitter_id,
  tags,
  ticket_form_id,
  token,
  type,
  updated_stamp,
  username,
  via,
  via_id,
}: CreateTicket): Promise<Ticket> {

  try {
    const zendesk = zendeskClient({ token, subdomain, username });

    const ticket: Record<string, boolean | number | Array<number> | object | string | Array<string> | undefined | Array<CustomField> | Priority | Status | TicketComment> = {
      assignee_email: undefined,
      assignee_id: undefined,
      attribute_value_ids: undefined,
      brand_id: undefined,
      collaborator_ids: undefined,
      comment,
      custom_fields: undefined,
      custom_status_id: undefined,
      due_at: undefined,
      email_ccs: undefined,
      external_id: undefined,
      followers: undefined,
      group_id: undefined,
      macro_id: undefined,
      organization_id: undefined,
      priority: undefined,
      problem_id: undefined,
      recipient: undefined,
      requester: undefined,
      requester_id,
      safe_update: undefined,
      sharing_agreement_ids: undefined,
      status: undefined,
      subject: undefined,
      submitter_id: undefined,
      tags: undefined,
      ticket_form_id: undefined,
      type: undefined,
      updated_stamp: undefined,
      via: undefined,
      via_id: undefined,
    };

    if (assignee_email) {
      ticket.assignee_email = assignee_email;
    }

    if (assignee_id) {
      ticket.assignee_id = assignee_id;
    }

    if (attribute_value_ids) {
      ticket.attribute_value_ids = attribute_value_ids;
    }

    if (brand_id) {
      ticket.brand_id = brand_id;
    }

    if (collaborator_ids) {
      ticket.collaborator_ids = collaborator_ids;
    }

    if (custom_fields) {
      ticket.custom_fields = custom_fields;
    }

    if (custom_status_id) {
      ticket.custom_status_id = custom_status_id;
    }

    if (due_at) {
      ticket.due_at = due_at;
    }

    if (email_ccs) {
      ticket.email_ccs = email_ccs;
    }

    if (external_id) {
      ticket.external_id = external_id;
    }

    if (followers) {
      ticket.followers = followers;
    }

    if (group_id) {
      ticket.group_id = group_id;
    }

    if (macro_id) {
      ticket.macro_id = macro_id;
    }

    if (organization_id) {
      ticket.organization_id = organization_id;
    }

    if (priority) {
      ticket.priority = priority;
    }

    if (problem_id) {
      ticket.problem_id = problem_id;
    }

    if (recipient) {
      ticket.recipient = recipient;
    }

    if (requester) {
      ticket.requester = requester;
    }

    if (safe_update) {
      ticket.safe_update = safe_update;
    }

    if (sharing_agreement_ids) {
      ticket.sharing_agreement_ids = sharing_agreement_ids;
    }

    if (status) {
      ticket.status = status;
    }

    if (subject) {
      ticket.subject = subject;
    }

    if (submitter_id) {
      ticket.submitter_id = submitter_id;
    }

    if (tags) {
      ticket.tags = tags;
    }

    if (ticket_form_id) {
      ticket.ticket_form_id = ticket_form_id;
    }

    if (type) {
      ticket.type = type;
    }

    if (updated_stamp) {
      ticket.updated_stamp = updated_stamp;
    }

    if (via) {
      ticket.via = via;
    }

    if (via_id) {
      ticket.via_id = via_id;
    }

    const response = await zendesk.tickets.create({
      ticket
    } as CreateOrUpdateTicket);

    return response.result;

  } catch (error) {
    log.error("Zendesk Create Ticket error", { error });
    throw new Error(`Zendesk Create Ticket error ${error}`);
  }
}
