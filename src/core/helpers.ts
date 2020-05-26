export function capitalize(str: string): string {
	return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

export function scrollToBottom() {
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: 'smooth'
	})
}
