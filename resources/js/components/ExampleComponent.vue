<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as h_volume from "../store/modules/24h_volume";

    export default {
        // method: {
        //     fetchVolume(){
        //         this.$store.dispatch('h_volume/fetchVolumes');
        //     }
        // },
        created() {
            this.$store.dispatch('h_volume/fetchVolumes');
            this.interval = setInterval(() => this.$store.dispatch('h_volume/fetchVolumes'), 5000);
        }
    }
</script>
