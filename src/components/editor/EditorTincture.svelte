<script lang="ts">
  // @ts-check
  import {t, dictionary, locale} from "svelte-i18n";
  import EditorItem from "./EditorItem.svelte";
  import {colors, tinctures} from "data/stores";
  import {tooltip} from "scripts/tooltip";
  import {DEFAULT_COLORS as defaults} from "config/defaults";

  export let t1: string = undefined;
  export let shield: string = undefined;

  $: localStorage.setItem("colors", JSON.stringify($colors));
  $: colorChanged = (tincture: string) => defaults[tincture] && $colors[tincture] !== defaults[tincture];

  const tincturesData = ["metals", "colours", "stains"]
    .map(type =>
      Object.keys($tinctures[type]).map(tincture => {
        const tinctureName = $dictionary[$locale]?.tinctures?.[tincture] ? $t(`tinctures.${tincture}`) : tincture;
        const typeName = $t(`editor.${type.slice(0, -1)}`);
        return {coa: {t1: tincture, shield}, tip: `${typeName}: ${tinctureName}`};
      })
    )
    .flat();

  const handleChange = (tincture: string) => {
    t1 = tincture;
  };

  function openColorInput() {
    this.previousElementSibling?.click();
  }

  function restoreColor(tincture: string) {
    $colors[tincture] = defaults[tincture];
  }
</script>

{$t("editor.tincture")}:
<div class="items">
  {#each tincturesData as { coa, tip }}
    <div class="wrapper">
      <div class="item" class:selected={t1 === coa.t1} on:click={() => handleChange(coa.t1)}>
        <EditorItem {coa} {tip} />
      </div>

      <div class="controls">
        {#if colorChanged(coa.t1)}
          <svg class="undo" on:click={() => restoreColor(coa.t1)} data-tooltip={$t("tooltip.undoColorChange")} use:tooltip>
            <use href="#undo-icon" />
          </svg>
        {/if}

        <div>
          <input type="color" bind:value={$colors[coa.t1]} />
          <svg class="edit" on:click={openColorInput} data-tooltip={$t("tooltip.changeColor")} use:tooltip>
            <use href="#pencil-icon" />
          </svg>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .wrapper {
    position: relative;
  }

  .controls {
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .wrapper:hover > .controls {
    visibility: visible;
    opacity: 1;
  }

  svg {
    position: absolute;
    fill: #f5f5f5;
    stroke: #000;
    stroke-width: 5;
    width: 1em;
    height: 1em;
    background-color: #33333320;
    padding: 0.2em;
  }

  svg:hover {
    fill: #fff;
    background-color: #33333340;
  }

  svg:active {
    transform: translateY(1px);
  }

  .edit {
    top: 0.8em;
    right: 0.8em;
  }

  .undo {
    top: 0.8em;
    right: 2.2em;
  }

  input[type="color"] {
    visibility: hidden;
    position: absolute;
    width: 1em;
    height: 1em;
    top: 1.2em;
    right: 1.2em;
  }
</style>
