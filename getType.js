export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}
// 파일 내보낼꺼다 = export default