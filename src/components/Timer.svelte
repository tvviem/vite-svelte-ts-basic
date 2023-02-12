<script lang="ts">
  import { time, eclapsedTime } from '../store/stores';

  const dateFormatter = new Intl.DateTimeFormat('vn', {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });
</script>

<h2>The time is {dateFormatter.format($time)}</h2>
<h2>You've been viewing this page for {$eclapsedTime}</h2>
