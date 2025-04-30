document.addEventListener("DOMContentLoaded", () => {
	const exercises = new Map();

	document.querySelectorAll(".exercise").forEach(section => {
		const id = section.id;
		const link = document.querySelector(`a[href="#${id}"]`);
		const header = section.querySelector(".exercise-header");

		exercises.set(id, { section, link, header });

		header.addEventListener("click", () => toggleSection(id));
		if (link) {
			link.addEventListener("click", (e) => {
				toggleSection(id);
				section.scrollIntoView({ behavior: "smooth", block: "start" });
			});
		}
	});

	function toggleSection(id) {
		const { section } = exercises.get(id);
		section.classList.toggle("open");
	}
});

function toggleSection(sectionId) {
	const section = document.getElementById(sectionId);
	section.classList.toggle("active");
}

