<script setup lang="ts">
	const route = useRoute()

	const { data: page } = await useAsyncData("page-" + route.path, () => {
		return queryCollection("content").path(route.path).first()
	})

	if (!page.value) {
		throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true })
	}
</script>

<template>
	<div v-if="page">
		<Metadata :page="page" />
		<ContentRenderer class="space-y-[2rem]" :value="page" />
	</div>
</template>
