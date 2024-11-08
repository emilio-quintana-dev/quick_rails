module ReactHelper
  def mount_react_app(
    component_name,
    props: {},
    tag: :div,
    override_dom_id: nil,
    class: nil
  )
    js_pack_tag_and_react_entry_point = html_escape('')

    js_pack_tag_and_react_entry_point << content_tag(
      tag,
      '',
      id: override_dom_id || component_name,
      "data-props": props.to_json,
      class:
    )

    js_pack_tag_and_react_entry_point << vite_javascript_tag(component_name) unless override_dom_id

    js_pack_tag_and_react_entry_point
  end
end
