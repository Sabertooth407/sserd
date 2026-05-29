<script>

    import ImpactHero from "../impactsections/ImpactHero.svelte";
    import ImpactStats from "../impactsections/ImpactStats.svelte";
    import AccessInclusion from "../impactsections/Access.svelte";
    import ResearchImpact from "../impactsections/Research.svelte";
    import EmpowermentImpact from "../impactsections/Empowerment.svelte";
    import Recognition from "../impactsections/Recognition.svelte";
    import Stories from "../impactsections/Stories.svelte";
    import InternationalExposure from "../impactsections/InternationalExposure.svelte";
    import BorderlessVision from "../impactsections/Vision.svelte";

</script>

<div class="impact-page">

    <ImpactHero />

    <ImpactStats />

    <AccessInclusion />

    <ResearchImpact />

    <EmpowermentImpact />

    <Recognition />

    <Stories />

    <InternationalExposure />

    <BorderlessVision />

</div>

<style>

.impact-page{

    min-height:100vh;

    color:white;

    background:
    linear-gradient(
        rgba(0,0,0,.78),
        rgba(0,0,0,.78)
    ),
    url('/images/impact-bg.jpg');

    background-size:cover;

    background-position:center;

    background-attachment:fixed;
}

</style>