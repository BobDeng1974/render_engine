#version 330
in vec2 frag_uv;
out vec4 color;
uniform sampler2D sampler;

// 
void main() {
  color = texture2D(sampler, frag_uv.st).rgba;
}
