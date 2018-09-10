export default function($param = null) {
  return $param ? (this.value = $param) : this.value;
}
