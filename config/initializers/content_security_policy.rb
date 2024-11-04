Rails.application.configure do
  config.content_security_policy do |policy|
    policy.default_src :self, :unsafe_inline, :unsafe_eval, :blob, :data, '*'
    policy.script_src :self, :unsafe_inline, :unsafe_eval, :blob, :data, '*'
    policy.style_src :self, :unsafe_inline, :blob, :data, '*'
    policy.img_src :self, :blob, :data, '*'
    policy.connect_src :self, '*'
    policy.font_src :self, :blob, :data, '*'
    policy.object_src :self, :blob, :data, '*'
    policy.media_src :self, :blob, :data, '*'
    policy.frame_src :self, '*'
  end
end
