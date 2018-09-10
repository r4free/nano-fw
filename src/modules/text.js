export default function($param = null) {
  return $param ? (this.innerText = $param) : this.innerText;
}
