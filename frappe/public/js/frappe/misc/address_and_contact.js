frappe.provide('frappe.contacts')

$.extend(frappe.contacts, {
	clear_address_and_contact: function(frm) {
		$(frm.fields_dict['address_html'].wrapper).html("");
		frm.fields_dict['contact_html'] && $(frm.fields_dict['contact_html'].wrapper).html("");
	},

	render_address_and_contact: function(frm) {
		// render address
		if(frm.fields_dict['address_html'] && "addr_list" in frm.doc.__onload) {
			$(frm.fields_dict['address_html'].wrapper)
				.html(frappe.render_template("address_list",
					cur_frm.doc.__onload))
				.find(".btn-address").on("click", function() {
					frappe.new_doc("Address");
					frappe.route_flags.return_to_previous_doctype = 1;
				});
			$(frm.fields_dict['address_html'].wrapper)
				.html(frappe.render_template("address_list",
					cur_frm.doc.__onload))
				.find(".btn-edit-address").on("click", function() {
					frappe.route_flags.return_to_previous_doctype = 1;
				});
		}

		// render contact
		if(frm.fields_dict['contact_html'] && "contact_list" in frm.doc.__onload) {
			$(frm.fields_dict['contact_html'].wrapper)
				.html(frappe.render_template("contact_list",
					cur_frm.doc.__onload))
				.find(".btn-contact").on("click", function() {
					frappe.new_doc("Contact");
				}
			);
		}
	}
})