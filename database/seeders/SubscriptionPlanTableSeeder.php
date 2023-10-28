<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode(['feature 1', 'feature 2', 'feature 3'])
            ],
            [
                'name' => 'Premium',
                'price' => 450000,
                'active_period_in_months' => 6,
                'features' => json_encode(['feature 1', 'feature 2', 'feature 3', 'feature 4', 'feature 5'])
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
